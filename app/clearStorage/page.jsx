'use client';

import { useEffect } from "react";

export default function Page() {
    useEffect(() => {
        localStorage.clear();
        window.location.href = '/login';
    }, []);
};
