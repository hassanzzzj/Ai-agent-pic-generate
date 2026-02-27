import React, { useState } from 'react';
import { Send } from 'lucide-react';

export function PromptBar({ onGenerate, loading }) {
    const [prompt, setPrompt] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (prompt.trim() && !loading) {
            onGenerate(prompt);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
            <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative flex items-center bg-slate-900 rounded-lg p-1">
                    <input
                        type="text"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        disabled={loading}
                        placeholder="Describe your imagination..."
                        className="flex-1 bg-transparent text-white placeholder-slate-400 px-4 py-3 focus:outline-none disabled:opacity-50"
                    />
                    <button
                        type="submit"
                        disabled={loading || !prompt.trim()}
                        className="p-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <Send className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </form>
    );
}
