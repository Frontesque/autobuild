#!/bin/bash
#!autobuild
dnf install -y git make cmake gcc gcc-c++ libstdc++-static automake libtool autoconf
git clone https://github.com/xmrig/xmrig.git
mkdir xmrig/build
cd xmrig/scripts && ./build_deps.sh && cd ../build
cmake .. -DXMRIG_DEPS=scripts/deps
make -j$(nproc)