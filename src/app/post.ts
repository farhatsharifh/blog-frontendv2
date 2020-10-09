export interface Post {
    id: number,
    title: string,
    text: string,
    link: string,
    isDeleted: boolean,
    createdAt: Date,
    _comments: [
        text: string,
        createdAt: Date,
    ],
    _creator: {
        username: string,
        createdAt: Date,
    }
}