function a() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("aa");
      //   resolve(1);
      reject(1);
    }, 500);
  });
}

async function b() {
  try {
    const rs = await a();
    console.log(rs);
    console.log("aaa");
  } catch (error) {
    console.log("erer");
    a
    a
    d
    console.log(error);
AudioDestinationNode
  }
  //   a()
  //     .then((rs) => {
  //       console.log(rs);
  //     })
  //     .catch((err) => {
  //       console.log('ee',err);
  //     })
  //     .finally(() => {
  //       console.log(11);
  //     });
  //     console.log("bb");
  //     console.log("bb");
  //       a()
  //         .then((rs) => {
  //           console.log(rs);
  //         })
  //         .catch((err) => {
  //           console.log("ee", err);
  //         })
  //         .finally(() => {
  //           console.log(11);
  //         });
  //     console.log("bb");
  //     console.log("bb");
}

b();
