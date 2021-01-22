import prettyMilliseconds from 'pretty-ms';
interface Log {
    name: string,
    information: any,
    at: number,
    identity?: string | number
}

const logs: Log[] = [];

export const AddLog = (name: string, information: any, identity?: string | number) => {
    logs.push({
        name,
        information,
        identity,
        at: performance.now()
    })
}

const timePassed = (at: number, index: number) => {
    return prettyMilliseconds(at - (logs[index - 1]?.at || 0) , { formatSubMilliseconds: true })
}

const shortenStrings = (data) => typeof (data) === "string" ? data.substring(0, 60) : data;

export const ShowLogs = () => {
    console.table(logs.map(({ at, information, ...rest }, index: number) => ({ ...rest, information: shortenStrings(information), timePassed: timePassed(at, index) })))
}