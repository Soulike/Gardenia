export function getNumberAbbreviation(number: number | string): string
{
    let n: number;
    let str = '';
    if (typeof number === 'string')
    {
        n = Number.parseInt(number);
    }
    else
    {
        n = number;
    }
    if (Number.isNaN(n))
    {
        throw new TypeError('not a valid number');
    }

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