export interface Post {
    id: string,
    title: string,
    text: string,
    link: string,
    isDeleted: boolean,
    createdAt: Date,
    _comments: [
        text: string,
        createdAt: Date,
    ],
    _creatorId: string,
}