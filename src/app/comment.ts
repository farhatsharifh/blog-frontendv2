export interface Comment {
    id: string,
    text: string,
    isDeleted: boolean,
    createdAt: Date,
    _creatorId: string,
    _postId: string
}