function triangleNumber(n) {
    if (n === 0) {
        return 0;
    }
        return n + triangleNumber(n - 1);

    }

    console.log(triangleNumber(8));