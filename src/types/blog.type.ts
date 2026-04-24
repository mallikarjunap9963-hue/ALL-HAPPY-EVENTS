export interface Blog {
    title: string;
    slug: string;
    short_description: string;
    thumbnail: string;
    created_at: string;
}

export interface Category {
    name: string;
    slug: string;
}

export interface BlogResponse {
    success: boolean;
    message: string;
    data: {
        blogs: Blog[];
        categories: Category[];
    };
}

export interface BlogCategory {
    name: string;
    slug: string;
}

export interface BlogDetails {
    title: string;
    slug: string;
    written_by: string;
    description: string;
    thumbnail: string;
    image: string;
    blog_category: BlogCategory;
    created_at: string;
}

export interface BlogDetailsResponse {
    success: boolean;
    message: string;
    data: BlogDetails;
}