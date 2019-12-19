
# API frameworks performance PK

[Noapi](https://github.com/hiowenluke/noapi) and [Express](https://github.com/expressjs/express), [Koa](https://github.com/koajs/koa) are high-performance API frameworks. Which one is more faster? This pk can give you a convincing answer.

## Install

```sh
git clone https://github.com/hiowenluke/api-frameworks-performance-pk api-pk
cd api-pk
npm install
```

## Run

```sh
node index.js
```

## Results

```sh
Benchmarking, about 30 seconds...
========================================
Results (requests/sec)
========================================
noapi   14649.4
koa     11538.73
express 7916.3
========================================
Platform info:
macOS Mojave 10.14 x64
Intel(R) Core(TM) i7-4558U CPU @ 2.80GHz x 4
Total Memory 16 GB
Node.js v10.16.3
V8 6.8.275.32-node.54
```

The results is on my pc. It will be different on yours, but it does not affect the ranking here.

## Conclusion

[Noapi](https://github.com/hiowenluke/noapi) is a high-performance API framework, faster than [Koa](https://github.com/koajs/koa) and [Express](https://github.com/expressjs/express).

## License

[MIT](LICENSE)

Copyright (c) 2019, Owen Luke
