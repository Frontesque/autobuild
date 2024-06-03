module.exports = [{"program":"xmrig","install":"#!/bin/bash\n#!autobuild\ndnf install -y git make cmake gcc gcc-c++ libstdc++-static automake libtool autoconf\ngit clone https://github.com/xmrig/xmrig.git\nmkdir xmrig/build\ncd xmrig/scripts && ./build_deps.sh && cd ../build\ncmake .. -DXMRIG_DEPS=scripts/deps\nmake -j$(nproc)"}];