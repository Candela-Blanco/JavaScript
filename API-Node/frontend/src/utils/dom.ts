export default function $(id: string): HTMLElement {
    const element = document.getElementById(id);
    if (!element) {
        throw new Error(`El elemento con la id ${id} no existe`);
    }
    return element;
}
