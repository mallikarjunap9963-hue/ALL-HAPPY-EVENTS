import type React from "react";

export interface PopularCategory {
    title: string;
    image: string;
    count: number;
    icon: React.ReactNode;
}