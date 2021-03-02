

   export const size = async () => {
        const res = await fetch("http://localhost:3002/monkeys?_start=0&_end=3");
        const headers = res.headers;
        console.log(headers);
        return Number(headers.get('X-Total-Count')) as number;
    };


