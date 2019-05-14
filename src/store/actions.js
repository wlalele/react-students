export function incrementRating(student) {
    return { type: 'INCREMENT_RATING', payload: student }
}

export function decrementRating(student) {
    return { type: 'DECREMENT_RATING', payload: student }
}

