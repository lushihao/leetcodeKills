function parseURL(url: string) {
    let qs: string [] | string = url.split("?")[1] ? url.split("?")[1] : ''
    var obj: any = {}
    if ('string' !== typeof qs || qs.length === 0) {
        return obj;
    }

    var key = [];
    var eq = '='
    var decode = decodeURIComponent;
    qs = qs.split("&")
    var qsLen = qs.length
    for (var i = 0; i < qsLen; ++i) {
        var x = qs[i]
        var idx = x.indexOf('=');
        var k;
        var v;
        if (idx >= 0) {
            k = x.substring(0, idx);
            v = x.substring(idx + 1)
        } else {
            k = x;
            v = ''
        }
        if (key.indexOf(k) === -1) {
            obj[k] = v
            key.push(k)
        } else if (obj[k] instanceof Array) {
            obj[k].push(v)
        } else {
            obj[k] = [obj[k], v]
        }
    }
    console.log(obj)
    return obj

};

var url = "http://www.chenwenbo.info?key0=0&key1=1&key2=2"

parseURL(url)