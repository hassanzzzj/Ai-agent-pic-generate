import React from 'react';
import { ImageIcon } from 'lucide-react';

export function ImageCanvas({ image, loading }) {
    if (loading) {
        return (
            <div className="w-full h-full min-h-[512px] bg-slate-900 rounded-xl border border-slate-800 flex flex-col items-center justify-center animate-pulse">
                <div className="w-16 h-16 bg-slate-800 rounded-full mb-4 animate-bounce" />
                <p className="text-slate-500 font-medium">Creating your masterpiece...</p>
            </div>
        );
    }

    if (image) {
        return (
            <div className="relative group w-full h-full">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl opacity-20 group-hover:opacity-40 transition duration-500 blur-lg"></div>
                <div className="relative w-full h-full bg-slate-900 rounded-xl overflow-hidden shadow-2xl">
                    <img
                        src={image}
                        alt="Generated masterpiece"
                        className="w-full h-full object-contain max-h-[768px]"
                    />
                </div>
            </div>
        );
    }

    return (
        <div className="w-full h-full min-h-[512px] bg-slate-900/50 rounded-xl border-2 border-dashed border-slate-800 flex flex-col items-center justify-center group hover:border-indigo-500/50 transition-colors duration-300">
            <div className="p-6 rounded-full bg-slate-900/50 mb-4 group-hover:scale-110 transition-transform duration-300">
                <ImageIcon className="w-12 h-12 text-slate-600 group-hover:text-indigo-400 transition-colors" />
            </div>
            <p className="text-slate-500 text-lg font-medium group-hover:text-slate-400">
                Ready to create something amazing?
            </p>
        </div>
    );
}
