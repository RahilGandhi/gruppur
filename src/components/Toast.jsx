import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, AlertTriangle, XCircle, Info } from 'lucide-react';

export const Toast = ({ id, message, type = 'info', duration = 3000, onClose }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            onClose(id);
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, id, onClose]);

    const getIcon = useCallback(() => {
        switch (type) {
            case 'success':
                return <CheckCircle className="h-5 w-5 text-green-400" />;
            case 'error':
                return <XCircle className="h-5 w-5 text-red-400" />;
            case 'warning':
                return <AlertTriangle className="h-5 w-5 text-yellow-400" />;
            case 'info':
            default:
                return <Info className="h-5 w-5 text-blue-400" />;
        }
    }, [type]);

      const getBackgroundColor = useCallback(() => {
        switch (type) {
          case 'success':
            return 'bg-green-100/80 dark:bg-green-900/80';
          case 'error':
            return 'bg-red-100/80 dark:bg-red-900/80';
          case 'warning':
            return 'bg-yellow-100/80 dark:bg-yellow-900/80';
          case 'info':
          default:
            return 'bg-blue-100/80 dark:bg-blue-900/80';
        }
      }, [type]);

    const getTextColor = useCallback(() => {
        switch (type) {
            case 'success':
                return 'text-green-700 dark:text-green-300';
            case 'error':
                return 'text-red-700 dark:text-red-300';
            case 'warning':
                return 'text-yellow-700 dark:text-yellow-300';
            case 'info':
            default:
                return 'text-blue-700 dark:text-blue-300';
        }
    }, [type]);

      const getBorderColor = useCallback(() => {
        switch (type) {
            case 'success':
                return 'border-green-400/50 dark:border-green-600/50';
            case 'error':
                return 'border-red-400/50 dark:border-red-600/50';
            case 'warning':
                return 'border-yellow-400/50 dark:border-yellow-600/50';
            case 'info':
            default:
                return 'border-blue-400/50 dark:border-blue-600/50';
        }
    }, [type]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: 30 }}
                    transition={{ duration: 0.3 }}
                    className={`flex items-center gap-4 p-3 rounded-lg shadow-lg border ${getBackgroundColor()} ${getTextColor()} ${getBorderColor()} min-w-[250px] max-w-[400px] relative backdrop-blur-md`}
                >
                    {getIcon()}
                    <div className="flex-1 text-sm font-medium">
                        {message}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};


export const useToast = () => {
    const [toasts, setToasts] = useState([]);

    const showToast = useCallback((message, options = {type: 'info', duration: 3000}) => {
        const id = crypto.randomUUID();
        const newToast = {
            id,
            message,
            onClose: (idToRemove) => {
                setToasts((prevToasts) => prevToasts.filter((t) => t.id !== idToRemove));
            },
            ...options,
        };
        setToasts((prevToasts) => [...prevToasts, newToast]);
        return id;
    }, []);

    const clearToast = useCallback((id) => {
        setToasts(prevToasts => prevToasts.filter(toast => toast.id !== id));
    }, []);

      const clearAllToasts = useCallback(() => {
        setToasts([]);
    }, []);

    return { showToast, toasts, clearToast, clearAllToasts };
};

export const ToastManager = ({ toasts }) => {
    return (
        <div className="fixed top-4 right-4 z-50 flex flex-col gap-2">
            <AnimatePresence>
                {toasts.map((toast) => (
                    <Toast
                        key={toast.id}
                        {...toast}
                    />
                ))}
            </AnimatePresence>
        </div>
    );
};