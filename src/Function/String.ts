export function getNumberAbbreviation(number: number): string
{
    let n = number;
    let str = '';

    if (n / 10000 >= 1)
    {
        n = n / 10000;
        str = `${n.toFixed(1)} 万`;
    }
    else if (n / 1000 >= 1)
    {
        n = n / 1000;
        str = `${n.toFixed(1)} 千`;
    }
    else
    {
        str = n.toString();
    }
    return str;
}