const sortByName = (a, b) => {
    if (a.name <= b.name)
        return -1
    return 1
}

export { sortByName }