export function formatDate(isoString: string): string{
    const date = new Date(isoString)
    const formmater  = new Intl.DateTimeFormat('es-ES', {
        year: 'numeric',
        month: 'long',
        day:'numeric'
    })
    return formmater.format(date)
}