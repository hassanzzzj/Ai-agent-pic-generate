import React from 'react';
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
    return twMerge(clsx(inputs));
}

const steps = [
    { id: 'starting', label: 'Initializing', icon: Loader2 },
    { id: 'planning', label: 'Optimizing Prompt', icon: Loader2 },
    { id: 'generating', label: 'Generating Image', icon: Loader2 },
    { id: 'critiquing', label: 'Quality Check', icon: Loader2 },
    { id: 'completed', label: 'Finished', icon: CheckCircle2 },
];

export function StatusDisplay({ status, error }) {
    if (status === 'idle') return null;

    if (status === 'failed') {
        return (
            <div className="flex items-center space-x-2 text-red-500 bg-red-500/10 px-4 py-2 rounded-lg border border-red-500/20">
                <AlertCircle className="w-5 h-5" />
                <span>{error || 'Something went wrong'}</span>
            </div>
        );
    }

    return (
        <div className="flex items-center space-x-4">
            {status === 'processing' && (
                <div className="flex items-center space-x-2 text-indigo-400 animate-pulse">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>AI Agent is working...</span>
                </div>
            )}
            {status === 'completed' && (
                <div className="flex items-center space-x-2 text-green-400">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Generation Complete</span>
                </div>
            )}
        </div>
    );
}
