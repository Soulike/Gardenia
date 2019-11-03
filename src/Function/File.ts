export async function transformBlobToString(blob: Readonly<Blob>): Promise<string>
{
    return new Promise((resolve, reject) =>
    {
        const fileReader = new FileReader();
        fileReader.readAsText(blob);
        fileReader.onloadend = () =>
        {
            resolve(fileReader.result as string);
        };
        fileReader.onerror = e =>
        {
            reject(e);
        };
    });
}

export function startDownload(url: string, fileName: string): void
{
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    link.click();
}