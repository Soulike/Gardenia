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

export function parseFileSize(fileSize: number): string
{
    // 存储单位，从大到小排列
    const {pow} = Math;
    const UNITS: { size: number, name: string }[] = [
        {size: pow(2, 80), name: 'YiB'},
        {size: pow(2, 70), name: 'ZiB'},
        {size: pow(2, 60), name: 'EiB'},
        {size: pow(2, 50), name: 'PiB'},
        {size: pow(2, 40), name: 'TiB'},
        {size: pow(2, 30), name: 'GiB'},
        {size: pow(2, 20), name: 'MiB'},
        {size: pow(2, 10), name: 'KiB'},
        {size: pow(2, 0), name: 'B'},
    ];
    for (let i = 0; i < UNITS.length; i++)
    {
        const {size, name} = UNITS[i];
        const num = fileSize / size;
        if (num >= 1)
        {
            return `${num.toFixed(2)} ${name}`;
        }
    }
    return '0 B';
}