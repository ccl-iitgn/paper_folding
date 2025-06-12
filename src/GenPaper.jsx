
const GenPaperA = (url1, url2) => {
    return new Promise((resolve, reject) => {
        const img1 = new Image();
        const img2 = new Image();
        const img3 = new Image();
        const img4 = new Image();
        const img5 = new Image();
        const img6 = new Image();
        const img7 = new Image();
        const bgImg = new Image();

        img1.crossOrigin = "anonymous";
        img2.crossOrigin = "anonymous";
        img3.crossOrigin = "anonymous";
        img4.crossOrigin = "anonymous";
        img5.crossOrigin = "anonymous";
        img6.crossOrigin = "anonymous";
        img7.crossOrigin = "anonymous";
        bgImg.crossOrigin = "anonymous";

        img1.src = url1;
        img2.src = url2;
        img3.src = url1;
        img4.src = url2;
        img5.src = url1;
        img6.src = url2;
        img7.src = url2;

        bgImg.src = "/bgimage.png";

        let cropped1 = null;
        let cropped2 = null;
        let cropped3 = null;
        let cropped4 = null;
        let cropped5 = null;
        let cropped6 = null;
        let cropped7 = null;
        let bgLoaded = false;

        const tryCombine = () => {
            if (cropped1 && cropped2 && cropped3 && cropped4 && cropped5 && bgLoaded) {
                const finalCanvas = document.createElement("canvas");
                finalCanvas.width = 2000;
                finalCanvas.height = 2000;
                const ctx = finalCanvas.getContext("2d");

                ctx.drawImage(bgImg, 0, 0, finalCanvas.width, finalCanvas.height);

                const imgA = new Image();
                const imgB = new Image();
                const imgC = new Image();
                const imgD = new Image();
                const imgE = new Image();
                const imgF = new Image();
                const imgG = new Image();
                imgA.onload = () => {
                    imgB.onload = () => {
                        imgC.onload = () => {
                            imgD.onload = () => {
                                imgE.onload = () => {
                                    imgF.onload = () => {
                                        imgG.onload = () => {
                                            ctx.drawImage(imgA, -250, 0, 1000, 1000);
                                            ctx.drawImage(imgB, -250, 500, 1000, 1000);
                                            ctx.drawImage(imgC, 1000, -250, 1000, 1000);
                                            ctx.drawImage(imgD, 1000, 750, 1000, 1000);
                                            ctx.drawImage(imgE, 1000, 1750, 1000, 1000);
                                            ctx.drawImage(imgF, 0, 1000, 1000, 1000);
                                            ctx.drawImage(imgG, 0, -250, 1000, 1000);
                                            const finalUrl = finalCanvas.toDataURL();
                                            resolve(finalUrl);
                                        }
                                        imgG.src = cropped7
                                    }
                                    imgF.src = cropped6
                                }
                                imgE.src = cropped5
                            };
                            imgD.src = cropped4
                        };
                        imgC.src = cropped3;
                    };
                    imgB.src = cropped2;
                };
                imgA.src = cropped1;
            }
        };

        img1.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;
            let x = 0, y = 0;
            let w = 1000, h = 1000;
            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(250, 0);
            ctx.lineTo(750, 500);
            ctx.lineTo(250, 500);
            ctx.closePath();
            ctx.clip();
            ctx.translate(x + w / 2, y + h / 2);
            ctx.rotate((Math.PI / 2));
            ctx.drawImage(img1, -w / 2, -h / 2, w, h);
            cropped1 = canvas.toDataURL();
            tryCombine();
        };

        img2.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;
            let x = 0, y = 0;
            let w = 1000, h = 1000;
            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(250, 0);
            ctx.lineTo(750, 0);
            ctx.lineTo(1000, 250);
            ctx.lineTo(250, 1000);
            ctx.closePath();
            ctx.clip();
            ctx.translate(x + w / 2, y + h / 2);
            ctx.rotate((Math.PI / 2));
            ctx.drawImage(img2, -w / 2, -h / 2, w, h);
            cropped2 = canvas.toDataURL();
            tryCombine();
        };
        img3.onload = () => {
            const canvas = document.createElement("canvas");
            const w = 1000, h = 1000;
            const x = 0, y = 0;

            canvas.width = w;
            canvas.height = h;

            const ctx = canvas.getContext("2d");

            ctx.beginPath();
            ctx.moveTo(0, 750);
            ctx.lineTo(500, 250);
            ctx.lineTo(1000, 250);
            ctx.lineTo(1000, 1000);
            ctx.lineTo(0, 1000);
            ctx.closePath();
            ctx.clip();

            ctx.save();
            ctx.translate(x + w / 2, y + h / 2);
            ctx.rotate(2 * (Math.PI / 2));
            ctx.drawImage(img3, -w / 2, -h / 2, w, h);
            ctx.restore();

            cropped3 = canvas.toDataURL();
            tryCombine();
        };

        img4.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;

            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(250, 0);
            ctx.lineTo(1000, 0);
            ctx.lineTo(1000, 750);
            ctx.closePath();
            ctx.clip();
            ctx.drawImage(img4, 0, 0, 1000, 1000);
            cropped4 = canvas.toDataURL();
            tryCombine();
        };
        img5.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;
            const w = 1000, h = 1000;
            const x = 0, y = 0;
            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(1000, 0);
            ctx.lineTo(1000, 250);
            ctx.lineTo(0, 250);
            ctx.closePath();
            ctx.clip();

            ctx.save();
            ctx.translate(x + w / 2, y + h / 2);
            ctx.rotate(2 * (Math.PI / 2));
            ctx.drawImage(img5, -w / 2, -h / 2, w, h);
            ctx.restore();

            cropped5 = canvas.toDataURL();
            tryCombine();
        };
        img6.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;
            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(0, 750);
            ctx.lineTo(1000, 750);
            ctx.lineTo(1000, 1000);
            ctx.lineTo(0, 1000);
            ctx.closePath();
            ctx.clip();
            ctx.drawImage(img6, 0, 0, 1000, 1000);
            cropped6 = canvas.toDataURL();
            tryCombine();
        };
        img7.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;
            const w = 1000, h = 1000;
            const x = 0, y = 0;
            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(750, 1000);
            ctx.lineTo(1000, 750);
            ctx.lineTo(1000, 1000);
            ctx.closePath();
            ctx.clip();
            ctx.save();
            ctx.translate(x + w / 2, y + h / 2);
            ctx.rotate(2 * (Math.PI / 2));
            ctx.drawImage(img7, -w / 2, -h / 2, w, h);
            ctx.restore();
            cropped7 = canvas.toDataURL();
            tryCombine();
        };
        bgImg.onload = () => {
            bgLoaded = true;
            tryCombine();
        };

        img1.onerror = reject;
        img2.onerror = reject;
        img3.onerror = reject;
        img4.onerror = reject;
        img5.onerror = reject;
        img6.onerror = reject;
        img7.onerror = reject;
        bgImg.onerror = reject;
    });
};
const GenPaperB = (url1, url2) => {
    return new Promise((resolve, reject) => {
        const img1 = new Image();
        const img2 = new Image();
        const img3 = new Image();
        const img4 = new Image();
        const img5 = new Image();
        const img6 = new Image();
        const img7 = new Image();
        const img8 = new Image();
        const bgImg = new Image();

        img1.crossOrigin = "anonymous";
        img2.crossOrigin = "anonymous";
        img3.crossOrigin = "anonymous";
        img4.crossOrigin = "anonymous";
        img5.crossOrigin = "anonymous";
        img6.crossOrigin = "anonymous";
        img7.crossOrigin = "anonymous";
        img8.crossOrigin = "anonymous";
        bgImg.crossOrigin = "anonymous";

        img1.src = url1;
        img2.src = url2;
        img3.src = url1;
        img4.src = url2;
        img5.src = url1;
        img6.src = url2;
        img7.src = url1;
        img8.src = url2;
        bgImg.src = "/bgimage.png";

        let cropped1 = null;
        let cropped2 = null;
        let cropped3 = null;
        let cropped4 = null;
        let cropped5 = null;
        let cropped6 = null;
        let cropped7 = null;
        let cropped8 = null;
        let bgLoaded = false;

        const tryCombine = () => {
            if (cropped1 && cropped2 && cropped3 && cropped4 && cropped5 && cropped6 && bgLoaded) {
                const finalCanvas = document.createElement("canvas");
                finalCanvas.width = 2000;
                finalCanvas.height = 2000;
                const ctx = finalCanvas.getContext("2d");

                ctx.drawImage(bgImg, 0, 0, finalCanvas.width, finalCanvas.height);

                const imgA = new Image();
                const imgB = new Image();
                const imgC = new Image();
                const imgD = new Image();
                const imgE = new Image();
                const imgF = new Image();
                const imgG = new Image();
                const imgH = new Image();
                imgA.onload = () => {
                    imgB.onload = () => {
                        imgC.onload = () => {
                            imgD.onload = () => {
                                imgE.onload = () => {
                                    imgF.onload = () => {
                                        imgG.onload = () => {
                                            imgH.onload = () => {
                                                ctx.drawImage(imgA, 0, 1000, 1000, 1000);
                                                ctx.drawImage(imgB, 1000, 1000, 1000, 1000);
                                                ctx.drawImage(imgC, 0, 0, 1000, 1000);
                                                ctx.drawImage(imgD, 1000, 0, 1000, 1000);
                                                ctx.drawImage(imgE, 0, 0, 1000, 1000);
                                                ctx.drawImage(imgF, 1000, 0, 1000, 1000);
                                                ctx.drawImage(imgG, 500, 0, 1000, 1000);
                                                ctx.drawImage(imgH, 500, 0, 1000, 1000);
                                                const finalUrl = finalCanvas.toDataURL();
                                                resolve(finalUrl);
                                            }
                                            imgH.src = cropped8
                                        }
                                        imgG.src = cropped7
                                    }
                                    imgF.src = cropped6
                                }
                                imgE.src = cropped5
                            };
                            imgD.src = cropped4
                        };
                        imgC.src = cropped3;
                    };
                    imgB.src = cropped2;
                };
                imgA.src = cropped1;
            }
        };

        img1.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;

            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(500, 500);
            ctx.lineTo(1000, 500);
            ctx.lineTo(1000, 1000);
            ctx.lineTo(0, 1000);
            ctx.closePath();
            ctx.clip();

            ctx.drawImage(img1, 0, 0, 1000, 1000);
            cropped1 = canvas.toDataURL();
            tryCombine();
        };

        img2.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;

            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(0, 500);
            ctx.lineTo(500, 500);
            ctx.lineTo(1000, 0);
            ctx.lineTo(1000, 1000);
            ctx.lineTo(0, 1000);
            ctx.closePath();
            ctx.clip();

            ctx.drawImage(img2, 0, 0, 1000, 1000);
            cropped2 = canvas.toDataURL();
            tryCombine();
        };
        img3.onload = () => {
            const canvas = document.createElement("canvas");
            const w = 1000, h = 1000;
            const x = 0, y = 0;

            canvas.width = w;
            canvas.height = h;

            const ctx = canvas.getContext("2d");

            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(250, 0);
            ctx.lineTo(250, 250);
            ctx.lineTo(500, 500);
            ctx.lineTo(0, 1000);
            ctx.closePath();
            ctx.clip();

            ctx.save();
            ctx.translate(x + w / 2, y + h / 2);
            ctx.rotate(-(Math.PI / 2));
            ctx.drawImage(img3, -w / 2, -h / 2, w, h);
            ctx.restore();

            cropped3 = canvas.toDataURL();
            tryCombine();
        };

        img4.onload = () => {
            const canvas = document.createElement("canvas");
            const w = 1000, h = 1000;
            const x = 0, y = 0;

            canvas.width = w;
            canvas.height = h;

            const ctx = canvas.getContext("2d");

            ctx.beginPath();
            ctx.moveTo(750, 0);
            ctx.lineTo(1000, 0);
            ctx.lineTo(1000, 1000);
            ctx.lineTo(500, 500);
            ctx.lineTo(750, 250);
            ctx.closePath();
            ctx.clip();

            ctx.save();
            ctx.translate(x + w / 2, y + h / 2);
            ctx.rotate((Math.PI / 2));
            ctx.drawImage(img4, -w / 2, -h / 2, w, h);
            ctx.restore();

            cropped4 = canvas.toDataURL();
            tryCombine();
        };
        img5.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;

            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(500, 500);
            ctx.lineTo(750, 250);
            ctx.lineTo(1000, 500);
            ctx.closePath();
            ctx.clip();
            ctx.drawImage(img5, 0, 0, 1000, 1000);

            cropped5 = canvas.toDataURL();
            tryCombine();
        };
        img6.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;

            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(0, 500);
            ctx.lineTo(250, 250);
            ctx.lineTo(500, 500);
            ctx.closePath();
            ctx.clip();
            ctx.drawImage(img6, 0, 0, 1000, 1000);

            cropped6 = canvas.toDataURL();
            tryCombine();
        };
        img7.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;
            const w = 1000, h = 1000;
            const x = 0, y = 0;
            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(250, 0);
            ctx.lineTo(500, 0);
            ctx.lineTo(250, 250);
            ctx.closePath();
            ctx.clip();
            ctx.save();
            ctx.translate(x + w / 2, y + h / 2);
            ctx.rotate(-(Math.PI / 2));
            ctx.drawImage(img7, -w / 2, -h / 2, w, h);
            ctx.restore();
            cropped7 = canvas.toDataURL();
            tryCombine();
        };
        bgImg.onload = () => {
            bgLoaded = true;
            tryCombine();
        };
        img8.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;
            const w = 1000, h = 1000;
            const x = 0, y = 0;
            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(500, 0);
            ctx.lineTo(750, 0);
            ctx.lineTo(750, 250);
            ctx.closePath();
            ctx.clip();
            ctx.save();
            ctx.translate(x + w / 2, y + h / 2);
            ctx.rotate((Math.PI / 2));
            ctx.drawImage(img8, -w / 2, -h / 2, w, h);
            ctx.restore();

            cropped8 = canvas.toDataURL();
            tryCombine();
        };
        bgImg.onload = () => {
            bgLoaded = true;
            tryCombine();
        };

        img1.onerror = reject;
        img2.onerror = reject;
        img3.onerror = reject;
        img4.onerror = reject;
        img5.onerror = reject;
        img6.onerror = reject;
        bgImg.onerror = reject;
    });
};
const GenPaperC = (url1, url2) => {
    const w = 1000, h = 1000;
    const x = 0, y = 0;

    return new Promise((resolve, reject) => {
        const img1 = new Image();
        const img2 = new Image();
        const img3 = new Image();
        const img4 = new Image();
        const img5 = new Image();
        const img6 = new Image();
        const img7 = new Image();
        const img8 = new Image();
        const img9 = new Image();
        const img10 = new Image();
        const bgImg = new Image();

        img1.crossOrigin = "anonymous";
        img2.crossOrigin = "anonymous";
        img3.crossOrigin = "anonymous";
        img4.crossOrigin = "anonymous";
        img5.crossOrigin = "anonymous";
        img6.crossOrigin = "anonymous";
        img7.crossOrigin = "anonymous";
        img8.crossOrigin = "anonymous";
        img9.crossOrigin = "anonymous";
        img10.crossOrigin = "anonymous";
        bgImg.crossOrigin = "anonymous";

        img1.src = url2;
        img2.src = url2;
        img3.src = url2;
        img4.src = url2;
        img5.src = url2;
        img6.src = url1;
        img7.src = url1;
        img8.src = url1;
        img9.src = url1;
        img10.src = url1;
        bgImg.src = "/bgimage.png";

        let cropped1 = null;
        let cropped2 = null;
        let cropped3 = null;
        let cropped4 = null;
        let cropped5 = null;
        let cropped6 = null;
        let cropped7 = null;
        let cropped8 = null;
        let cropped9 = null;
        let cropped10 = null;
        let bgLoaded = false;

        const tryCombine = () => {
            if (cropped1 && cropped2 && cropped3 && cropped4 && cropped5 && cropped6 && cropped7 && cropped8 && cropped9 && cropped10 && bgLoaded) {
                const finalCanvas = document.createElement("canvas");
                finalCanvas.width = 2000;
                finalCanvas.height = 2000;
                const ctx = finalCanvas.getContext("2d");

                ctx.drawImage(bgImg, 0, 0, finalCanvas.width, finalCanvas.height);

                const imgA = new Image();
                const imgB = new Image();
                const imgC = new Image();
                const imgD = new Image();
                const imgE = new Image();
                const imgF = new Image();
                const imgG = new Image();
                const imgH = new Image();
                const imgI = new Image();
                const imgJ = new Image();
                imgA.onload = () => {
                    imgB.onload = () => {
                        imgC.onload = () => {
                            imgD.onload = () => {
                                imgE.onload = () => {
                                    imgF.onload = () => {
                                        imgG.onload = () => {
                                            imgH.onload = () => {
                                                imgI.onload = () => {
                                                    imgJ.onload = () => {
                                                        ctx.drawImage(imgA, 0, 0, 1000, 1000);
                                                        ctx.drawImage(imgB, 500, 0, 1000, 1000);
                                                        ctx.drawImage(imgC, 0, 500, 1000, 1000);
                                                        ctx.drawImage(imgD, 0, 1000, 1000, 1000);
                                                        ctx.drawImage(imgE, 1000, 0, 1000, 1000);
                                                        ctx.drawImage(imgF, 1000, 1000, 1000, 1000);
                                                        ctx.drawImage(imgG, 0, 1500, 1000, 1000);
                                                        ctx.drawImage(imgH, 1500, 0, 1000, 1000);
                                                        ctx.drawImage(imgI, 0, 1000, 1000, 1000);
                                                        ctx.drawImage(imgJ, 1000, 0, 1000, 1000);
                                                        const finalUrl = finalCanvas.toDataURL();
                                                        resolve(finalUrl);
                                                    }
                                                    imgJ.src = cropped10

                                                }
                                                imgI.src = cropped9
                                            }
                                            imgH.src = cropped8
                                        }
                                        imgG.src = cropped7
                                    }
                                    imgF.src = cropped6
                                }
                                imgE.src = cropped5
                            };
                            imgD.src = cropped4
                        };
                        imgC.src = cropped3;
                    };
                    imgB.src = cropped2;
                };
                imgA.src = cropped1;
            }
        };

        img1.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;
            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(750, 0);
            ctx.lineTo(750, 750);
            ctx.lineTo(0, 750);
            ctx.closePath();
            ctx.clip();
            ctx.drawImage(img1, 0, 0, 1000, 1000);
            cropped1 = canvas.toDataURL();
            tryCombine();
        };

        img2.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;
            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(750, 0);
            ctx.lineTo(1000, 0);
            ctx.lineTo(1000, 500);
            ctx.lineTo(750, 750);
            ctx.closePath();
            ctx.clip();
            ctx.drawImage(img2, 0, 0, w, h);
            cropped2 = canvas.toDataURL();
            tryCombine();
        };
        img3.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = w;
            canvas.height = h;

            const ctx = canvas.getContext("2d");

            ctx.beginPath();
            ctx.moveTo(0, 750);
            ctx.lineTo(750, 750);
            ctx.lineTo(500, 1000);
            ctx.lineTo(0, 1000);
            ctx.closePath();
            ctx.clip();
            ctx.drawImage(img3, 0, 0, 1000, 1000);
            cropped3 = canvas.toDataURL();
            tryCombine();
        };

        img4.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = w;
            canvas.height = h;

            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(750, 250);
            ctx.lineTo(1000, 0);
            ctx.lineTo(1000, 500);
            ctx.closePath();
            ctx.clip();
            ctx.translate(x + w / 2, y + h / 2);
            ctx.rotate(-(Math.PI / 2));
            ctx.drawImage(img4, -w / 2, -h / 2, w, h);
            cropped4 = canvas.toDataURL();
            tryCombine();
        };
        img5.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;
            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(0, 1000);
            ctx.lineTo(250, 750);
            ctx.lineTo(500, 1000);
            ctx.closePath();
            ctx.clip();
            ctx.translate(x + w / 2, y + h / 2);
            ctx.rotate((Math.PI / 2));
            ctx.drawImage(img5, -w / 2, -h / 2, w, h);
            cropped5 = canvas.toDataURL();
            tryCombine();
        };
        img6.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;

            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(500, 0);
            ctx.lineTo(750, 250);
            ctx.lineTo(1000, 250);
            ctx.lineTo(1000, 1000);
            ctx.lineTo(250, 1000);
            ctx.lineTo(250, 750);
            ctx.lineTo(0, 500);
            ctx.closePath();
            ctx.clip();
            ctx.drawImage(img7, 0, 0, w, h);
            cropped6 = canvas.toDataURL();
            tryCombine();
        };
        img7.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;
            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(250, 0);
            ctx.lineTo(500, 0);
            ctx.lineTo(250, 250);
            ctx.closePath();
            ctx.clip();
            ctx.save();
            ctx.translate(x + w / 2, y + h / 2);
            ctx.rotate((Math.PI / 2));
            ctx.drawImage(img7, -w / 2, -h / 2, w, h);
            ctx.restore();
            cropped7 = canvas.toDataURL();
            tryCombine();
        };
        img8.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;
            const w = 1000, h = 1000;
            const x = 0, y = 0;
            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(0, 250);
            ctx.lineTo(250, 250);
            ctx.lineTo(0, 500);
            ctx.closePath();
            ctx.clip();
            ctx.save();
            ctx.translate(x + w / 2, y + h / 2);
            ctx.rotate(-(Math.PI / 2));
            ctx.drawImage(img8, -w / 2, -h / 2, w, h);
            ctx.restore();

            cropped8 = canvas.toDataURL();
            tryCombine();
        };
        img9.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;
            const w = 1000, h = 1000;
            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(0, 750);
            ctx.lineTo(250, 750);
            ctx.lineTo(250, 1000);
            ctx.lineTo(0, 1000);
            ctx.closePath();
            ctx.clip();
            ctx.drawImage(img9, 0, 0, w, h);
            cropped9 = canvas.toDataURL();
            tryCombine();
        };
        img10.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;
            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(750, 0);
            ctx.lineTo(1000, 0);
            ctx.lineTo(1000, 250);
            ctx.lineTo(750, 250);
            ctx.closePath();
            ctx.clip();
            ctx.drawImage(img10, 0, 0, w, h);
            cropped10 = canvas.toDataURL();
            tryCombine();
        };

        bgImg.onload = () => {
            bgLoaded = true;
            tryCombine();
        };

        img1.onerror = reject;
        img2.onerror = reject;
        img3.onerror = reject;
        img4.onerror = reject;
        img5.onerror = reject;
        img6.onerror = reject;
        img7.onerror = reject;
        img8.onerror = reject;
        img9.onerror = reject;
        img10.onerror = reject;
        bgImg.onerror = reject;
    });
};
const GenPaperD = (url1, url2) => {
    return new Promise((resolve, reject) => {
        const img1 = new Image();
        const img2 = new Image();
        const img3 = new Image();
        const img4 = new Image();
        const img5 = new Image();
        const img6 = new Image();
        const img7 = new Image();
        const bgImg = new Image();

        img1.crossOrigin = "anonymous";
        img2.crossOrigin = "anonymous";
        img3.crossOrigin = "anonymous";
        img4.crossOrigin = "anonymous";
        img5.crossOrigin = "anonymous";
        img6.crossOrigin = "anonymous";
        img7.crossOrigin = "anonymous";
        bgImg.crossOrigin = "anonymous";

        img1.src = url1;
        img2.src = url2;
        img3.src = url1;
        img4.src = url2;
        img5.src = url1;
        img6.src = url2;
        img7.src = url2;

        bgImg.src = "/bgimage.png";

        let cropped1 = null;
        let cropped2 = null;
        let cropped3 = null;
        let cropped4 = null;
        let cropped5 = null;
        let cropped6 = null;
        let cropped7 = null;
        let bgLoaded = false;

        const tryCombine = () => {
            if (cropped1 && cropped2 && cropped3 && cropped4 && cropped5 && cropped6 && bgLoaded) {
                const finalCanvas = document.createElement("canvas");
                finalCanvas.width = 2000;
                finalCanvas.height = 2000;
                const ctx = finalCanvas.getContext("2d");

                ctx.drawImage(bgImg, 0, 0, finalCanvas.width, finalCanvas.height);

                const imgA = new Image();
                const imgB = new Image();
                const imgC = new Image();
                const imgD = new Image();
                const imgE = new Image();
                const imgF = new Image();
                imgA.onload = () => {
                    imgB.onload = () => {
                        imgC.onload = () => {
                            imgD.onload = () => {
                                imgE.onload = () => {
                                    imgF.onload = () => {
                                        ctx.drawImage(imgA, 0, 0, 1000, 1000);
                                        ctx.drawImage(imgB, 1000, 0, 1000, 1000);
                                        ctx.drawImage(imgC, 0, 1000, 1000, 1000);
                                        ctx.drawImage(imgD, 1000, 1000, 1000, 1000);
                                        ctx.drawImage(imgE, -250, 1250, 1000, 1000);
                                        ctx.drawImage(imgF, 1500, 1500, 1000, 1000);
                                        const finalUrl = finalCanvas.toDataURL();
                                        resolve(finalUrl);
                                    }
                                    imgF.src = cropped6
                                }
                                imgE.src = cropped5
                            };
                            imgD.src = cropped4
                        };
                        imgC.src = cropped3;
                    };
                    imgB.src = cropped2;
                };
                imgA.src = cropped1;
            }
        };

        img1.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;
            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(1000, 0);
            ctx.lineTo(1000, 1000);
            ctx.lineTo(250, 250);
            ctx.lineTo(250, 750);
            ctx.lineTo(0, 1000);
            ctx.closePath();
            ctx.clip();
            ctx.drawImage(img1, 0, 0, 1000, 1000);
            cropped1 = canvas.toDataURL();
            tryCombine();
        };

        img2.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;
            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(1000, 0);
            ctx.lineTo(1000, 500);
            ctx.lineTo(750, 250);
            ctx.lineTo(0, 1000);
            ctx.closePath();
            ctx.clip();
            ctx.drawImage(img2, 0, 0, 1000, 1000);
            cropped2 = canvas.toDataURL();
            tryCombine();
        };
        img3.onload = () => {
            const canvas = document.createElement("canvas");
            const w = 1000, h = 1000;
            const x = 0, y = 0;

            canvas.width = w;
            canvas.height = h;

            const ctx = canvas.getContext("2d");

            ctx.beginPath();
            ctx.moveTo(1000, 0);
            ctx.lineTo(1000, 1000);
            ctx.lineTo(500, 500);
            ctx.closePath();
            ctx.clip();

            ctx.save();
            ctx.translate(x + w / 2, y + h / 2);
            ctx.rotate(-(Math.PI / 2));
            ctx.drawImage(img3, -w / 2, -h / 2, w, h);
            ctx.restore();

            cropped3 = canvas.toDataURL();
            tryCombine();
        };

        img4.onload = () => {
            const canvas = document.createElement("canvas");
            const w = 1000, h = 1000;
            const x = 0, y = 0;

            canvas.width = w;
            canvas.height = h;

            const ctx = canvas.getContext("2d");

            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(500, 500);
            ctx.lineTo(500, 1000);
            ctx.lineTo(0, 1000);
            ctx.closePath();
            ctx.clip();

            ctx.save();
            ctx.translate(x + w / 2, y + h / 2);
            ctx.rotate((Math.PI / 2));
            ctx.drawImage(img4, -w / 2, -h / 2, w, h);
            ctx.restore();

            cropped4 = canvas.toDataURL();
            tryCombine();
        };
        img5.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;
            const w = 1000, h = 1000;
            const x = 0, y = 0;
            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(250, 750);
            ctx.lineTo(500, 500);
            ctx.lineTo(750, 750);
            ctx.closePath();
            ctx.clip();

            ctx.save();
            ctx.translate(x + w / 2, y + h / 2);
            ctx.rotate(-(Math.PI / 2));
            ctx.drawImage(img5, -w / 2, -h / 2, w, h);
            ctx.restore();

            cropped5 = canvas.toDataURL();
            tryCombine();
        };
        img6.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;
            const w = 1000, h = 1000;
            const x = 0, y = 0;
            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(250, 250);
            ctx.lineTo(500, 0);
            ctx.lineTo(500, 500);
            ctx.closePath();
            ctx.clip();

            ctx.save();
            ctx.translate(x + w / 2, y + h / 2);
            ctx.rotate(-(Math.PI / 2));
            ctx.drawImage(img6, -w / 2, -h / 2, w, h);
            ctx.restore();

            cropped6 = canvas.toDataURL();
            tryCombine();
        };
        img7.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;
            const w = 1000, h = 1000;
            const x = 0, y = 0;
            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(500, 500);
            ctx.lineTo(750, 250);
            ctx.lineTo(1000, 500);
            ctx.closePath();
            ctx.clip();
            ctx.save();
            ctx.translate(x + w / 2, y + h / 2);
            ctx.rotate(-(Math.PI / 2));
            ctx.drawImage(img7, -w / 2, -h / 2, w, h);
            ctx.restore();
            cropped7 = canvas.toDataURL();
            tryCombine();
        };
        bgImg.onload = () => {
            bgLoaded = true;
            tryCombine();
        };

        img1.onerror = reject;
        img2.onerror = reject;
        img3.onerror = reject;
        img4.onerror = reject;
        img5.onerror = reject;
        img6.onerror = reject;
        img7.onerror = reject;
        bgImg.onerror = reject;
    });
};
const GenPaperE = (url1, url2) => {
    const w = 1000, h = 1000;
    const x = 0, y = 0;
    return new Promise((resolve, reject) => {
        const img1 = new Image();
        const img2 = new Image();
        const img3 = new Image();
        const img4 = new Image();
        const img5 = new Image();
        const img6 = new Image();
        const img7 = new Image();
        const bgImg = new Image();

        img1.crossOrigin = "anonymous";
        img2.crossOrigin = "anonymous";
        img3.crossOrigin = "anonymous";
        img4.crossOrigin = "anonymous";
        img5.crossOrigin = "anonymous";
        img6.crossOrigin = "anonymous";
        img7.crossOrigin = "anonymous";
        bgImg.crossOrigin = "anonymous";

        img1.src = url1;
        img2.src = url2;
        img3.src = url1;
        img4.src = url2;
        img5.src = url1;
        img6.src = url2;
        img7.src = url2;

        bgImg.src = "/bgimage.png";

        let cropped1 = null;
        let cropped2 = null;
        let cropped3 = null;
        let cropped4 = null;
        let cropped5 = null;
        let cropped6 = null;
        let bgLoaded = false;

        const tryCombine = () => {
            if (cropped1 && cropped2 && cropped3 && cropped4 && cropped5 && cropped6 && bgLoaded) {
                const finalCanvas = document.createElement("canvas");
                finalCanvas.width = 2000;
                finalCanvas.height = 2000;
                const ctx = finalCanvas.getContext("2d");

                ctx.drawImage(bgImg, 0, 0, finalCanvas.width, finalCanvas.height);

                const imgA = new Image();
                const imgB = new Image();
                const imgC = new Image();
                const imgD = new Image();
                const imgE = new Image();
                const imgF = new Image();
                imgA.onload = () => {
                    imgB.onload = () => {
                        imgC.onload = () => {
                            imgD.onload = () => {
                                imgE.onload = () => {
                                    imgF.onload = () => {
                                        ctx.drawImage(imgA, 0, -500, 1000, 1000);
                                        ctx.drawImage(imgB, 1000, -500, 1000, 1000);
                                        ctx.drawImage(imgC, 0, 1500, 1000, 1000);
                                        ctx.drawImage(imgD, 0, 500, 1000, 1000);
                                        ctx.drawImage(imgE, 1000, 1500, 1000, 1000);
                                        ctx.drawImage(imgF, 1000, 500, 1000, 1000);
                                        const finalUrl = finalCanvas.toDataURL();
                                        resolve(finalUrl);
                                    }
                                    imgF.src = cropped6
                                }
                                imgE.src = cropped5
                            };
                            imgD.src = cropped4
                        };
                        imgC.src = cropped3;
                    };
                    imgB.src = cropped2;
                };
                imgA.src = cropped1;
            }
        };

        img1.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;
            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(0, 500);
            ctx.lineTo(1000, 500);
            ctx.lineTo(1000, 1000);
            ctx.lineTo(0, 1000);
            ctx.closePath();
            ctx.clip();
            ctx.save();
            ctx.translate(x + w / 2, y + h / 2);
            ctx.rotate(2 * (Math.PI / 2));
            ctx.drawImage(img1, -w / 2, -h / 2, w, h);
            ctx.restore();

            cropped1 = canvas.toDataURL();
            tryCombine();
        };

        img2.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;
            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(0, 500);
            ctx.lineTo(1000, 500);
            ctx.lineTo(500, 1000);
            ctx.lineTo(0, 1000);
            ctx.closePath();
            ctx.clip();
            ctx.save();
            ctx.translate(x + w / 2, y + h / 2);
            ctx.rotate(2 * (Math.PI / 2));
            ctx.drawImage(img2, -w / 2, -h / 2, w, h);
            ctx.restore();
            cropped2 = canvas.toDataURL();
            tryCombine();
        };
        img3.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = w;
            canvas.height = h;
            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(500, 0);
            ctx.lineTo(500, 500);
            ctx.lineTo(0, 500);
            ctx.closePath();
            ctx.clip();
            ctx.save();
            ctx.translate(x + w / 2, y + h / 2);
            ctx.rotate(2 * (Math.PI / 2));
            ctx.drawImage(img3, -w / 2, -h / 2, w, h);
            ctx.restore();
            cropped3 = canvas.toDataURL();
            tryCombine();
        };

        img4.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = w;
            canvas.height = h;
            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(500, 0);
            ctx.lineTo(0, 500);
            ctx.lineTo(500, 500);
            ctx.lineTo(500, 1000);
            ctx.lineTo(0, 1000);
            ctx.closePath();
            ctx.clip();
            ctx.drawImage(img4, 0, 0, 1000, 1000);
            cropped4 = canvas.toDataURL();
            tryCombine();
        };
        img5.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;
            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(500, 0);
            ctx.lineTo(1000, 0);
            ctx.lineTo(1000, 500);
            ctx.lineTo(500, 500);
            ctx.closePath();
            ctx.clip();
            ctx.save();
            ctx.translate(x + w / 2, y + h / 2);
            ctx.rotate(2 * (Math.PI / 2));
            ctx.drawImage(img5, -w / 2, -h / 2, w, h);
            ctx.restore();

            cropped5 = canvas.toDataURL();
            tryCombine();
        };
        img6.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;
            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(500, 500);
            ctx.lineTo(1000, 500);
            ctx.lineTo(1000, 1000);
            ctx.lineTo(500, 1000);
            ctx.closePath();
            ctx.clip();
            ctx.drawImage(img6, 0, 0, 1000, 1000);
            cropped6 = canvas.toDataURL();
            tryCombine();
        };
        bgImg.onload = () => {
            bgLoaded = true;
            tryCombine();
        };

        img1.onerror = reject;
        img2.onerror = reject;
        img3.onerror = reject;
        img4.onerror = reject;
        img5.onerror = reject;
        img6.onerror = reject;
        img7.onerror = reject;
        bgImg.onerror = reject;
    });
};
const GenPaperF = (url1, url2) => {
    return new Promise((resolve, reject) => {
        const img1 = new Image();
        const img2 = new Image();
        const img3 = new Image();
        const img4 = new Image();
        const img5 = new Image();
        const bgImg = new Image();

        img1.crossOrigin = "anonymous";
        img2.crossOrigin = "anonymous";
        img3.crossOrigin = "anonymous";
        img4.crossOrigin = "anonymous";
        img5.crossOrigin = "anonymous";
        bgImg.crossOrigin = "anonymous";

        img1.src = url1;
        img2.src = url2;
        img3.src = url1;
        img4.src = url2;
        img5.src = url1;
        bgImg.src = "/bgimage.png";

        let cropped1 = null;
        let cropped2 = null;
        let cropped3 = null;
        let cropped4 = null;
        let cropped5 = null;
        let bgLoaded = false;

        const tryCombine = () => {
            if (cropped1 && cropped2 && cropped3 && cropped4 && cropped5 && bgLoaded) {
                const finalCanvas = document.createElement("canvas");
                finalCanvas.width = 2000;
                finalCanvas.height = 2000;
                const ctx = finalCanvas.getContext("2d");

                ctx.drawImage(bgImg, 0, 0, finalCanvas.width, finalCanvas.height);

                const imgA = new Image();
                const imgB = new Image();
                const imgC = new Image();
                const imgD = new Image();
                const imgE = new Image();
                imgA.onload = () => {
                    imgB.onload = () => {
                        imgC.onload = () => {
                            imgD.onload = () => {
                                imgE.onload = () => {
                                    ctx.drawImage(imgA, 0, 0, 1000, 1000);
                                    ctx.drawImage(imgB, 1000, 0, 1000, 1000);
                                    ctx.drawImage(imgC, 500, 500, 1000, 1000);
                                    ctx.drawImage(imgD, 0, 1000, 1000, 1000);
                                    ctx.drawImage(imgE, 1000, 1000, 1000, 1000);
                                    const finalUrl = finalCanvas.toDataURL();
                                    resolve(finalUrl);
                                }
                                imgE.src = cropped5
                            };
                            imgD.src = cropped4
                        };
                        imgC.src = cropped3;
                    };
                    imgB.src = cropped2;
                };
                imgA.src = cropped1;
            }
        };

        img1.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;

            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(1000, 0);
            ctx.lineTo(1000, 500);
            ctx.lineTo(500, 0);
            ctx.lineTo(0, 500);
            ctx.closePath();
            ctx.clip();

            ctx.drawImage(img1, 0, 0, 1000, 1000);
            cropped1 = canvas.toDataURL();
            tryCombine();
        };

        img2.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;

            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(1000, 0);
            ctx.lineTo(1000, 500);
            ctx.lineTo(0, 500);
            ctx.closePath();
            ctx.clip();

            ctx.drawImage(img2, 0, 0, 1000, 1000);
            cropped2 = canvas.toDataURL();
            tryCombine();
        };
        img3.onload = () => {
            const canvas = document.createElement("canvas");
            const w = 1000, h = 1000;
            const x = 0, y = 0;

            canvas.width = w;
            canvas.height = h;

            const ctx = canvas.getContext("2d");

            ctx.beginPath();
            ctx.moveTo(500, 0);
            ctx.lineTo(500, 1000);
            ctx.lineTo(0, 500);
            ctx.closePath();
            ctx.clip();

            ctx.save();
            ctx.translate(x + w / 2, y + h / 2);
            ctx.rotate(3 * (Math.PI / 2));
            ctx.drawImage(img3, -w / 2, -h / 2, w, h);
            ctx.restore();

            cropped3 = canvas.toDataURL();
            tryCombine();
        };

        img4.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;

            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(0, 500);
            ctx.lineTo(1000, 500);
            ctx.lineTo(1000, 1000);
            ctx.lineTo(0, 1000);
            ctx.closePath();
            ctx.clip();
            ctx.drawImage(img4, 0, 0, 1000, 1000);
            cropped4 = canvas.toDataURL();
            tryCombine();
        };
        img5.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;

            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(0, 500);
            ctx.lineTo(1000, 500);
            ctx.lineTo(1000, 1000);
            ctx.lineTo(0, 1000);
            ctx.closePath();
            ctx.clip();
            ctx.drawImage(img5, 0, 0, 1000, 1000);

            cropped5 = canvas.toDataURL();
            tryCombine();
        };

        bgImg.onload = () => {
            bgLoaded = true;
            tryCombine();
        };

        img1.onerror = reject;
        img2.onerror = reject;
        img3.onerror = reject;
        img4.onerror = reject;
        img5.onerror = reject;
        bgImg.onerror = reject;
    });
};

const GenPaperG = (url1, url2) => {
    const w = 1000, h = 1000;
    const x = 0, y = 0;

    return new Promise((resolve, reject) => {
        const img1 = new Image();
        const img2 = new Image();
        const img3 = new Image();
        const img4 = new Image();
        const img5 = new Image();
        const img6 = new Image();
        const img7 = new Image();
        const bgImg = new Image();

        img1.crossOrigin = "anonymous";
        img2.crossOrigin = "anonymous";
        img3.crossOrigin = "anonymous";
        img4.crossOrigin = "anonymous";
        img5.crossOrigin = "anonymous";
        img6.crossOrigin = "anonymous";
        img7.crossOrigin = "anonymous";
        bgImg.crossOrigin = "anonymous";

        img1.src = url1;
        img2.src = url2;
        img3.src = url1;
        img4.src = url2;
        img5.src = url1;
        img6.src = url2;
        img7.src = url2;
        bgImg.src = "/bgimage.png";

        let cropped1 = null;
        let cropped2 = null;
        let cropped3 = null;
        let cropped4 = null;
        let cropped5 = null;
        let cropped6 = null;
        let cropped7 = null;
        let bgLoaded = false;

        const tryCombine = () => {
            if (cropped1 && cropped2 && cropped3 && cropped4 && cropped5 && cropped6 && bgLoaded) {
                const finalCanvas = document.createElement("canvas");
                finalCanvas.width = 2000;
                finalCanvas.height = 2000;
                const ctx = finalCanvas.getContext("2d");

                ctx.drawImage(bgImg, 0, 0, finalCanvas.width, finalCanvas.height);

                const imgA = new Image();
                const imgB = new Image();
                const imgC = new Image();
                const imgD = new Image();
                const imgE = new Image();
                const imgF = new Image();
                const imgG = new Image();
                imgA.onload = () => {
                    imgB.onload = () => {
                        imgC.onload = () => {
                            imgD.onload = () => {
                                imgE.onload = () => {
                                    imgF.onload = () => {
                                        imgG.onload = () => {
                                            ctx.drawImage(imgA, 500, -250, 1000, 1000);
                                            ctx.drawImage(imgB, 500, 750, 1000, 1000);
                                            ctx.drawImage(imgC, 0, 1750, 1000, 1000);
                                            ctx.drawImage(imgD, 500, 1000, 1000, 1000);
                                            ctx.drawImage(imgE, 1000, 1750, 1000, 1000);
                                            ctx.drawImage(imgF, 1500, -250, 1000, 1000);
                                            ctx.drawImage(imgG, -500, -250, 1000, 1000);
                                            const finalUrl = finalCanvas.toDataURL();
                                            resolve(finalUrl);
                                        }
                                        imgG.src = cropped7
                                    }
                                    imgF.src = cropped6
                                }
                                imgE.src = cropped5
                            };
                            imgD.src = cropped4
                        };
                        imgC.src = cropped3;
                    };
                    imgB.src = cropped2;
                };
                imgA.src = cropped1;
            }
        };

        img1.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;

            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(0, 250);
            ctx.lineTo(1000, 250);
            ctx.lineTo(1000, 1000);
            ctx.lineTo(0, 1000);
            ctx.closePath();
            ctx.clip();
            ctx.save();
            ctx.translate(x + w / 2, y + h / 2);
            ctx.rotate(2 * (Math.PI / 2));
            ctx.drawImage(img1, -w / 2, -h / 2, w, h);
            ctx.restore();
            cropped1 = canvas.toDataURL();
            tryCombine();
        };

        img2.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;
            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(1000, 0);
            ctx.lineTo(500, 500);
            ctx.closePath();
            ctx.clip();

            ctx.drawImage(img2, 0, 0, 1000, 1000);
            cropped2 = canvas.toDataURL();
            tryCombine();
        };
        img3.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = w;
            canvas.height = h;

            const ctx = canvas.getContext("2d");

            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(500, 0);
            ctx.lineTo(500, 250);
            ctx.lineTo(0, 500);
            ctx.closePath();
            ctx.clip();
            ctx.save();
            ctx.translate(x + w / 2, y + h / 2);
            ctx.rotate(2 * (Math.PI / 2));
            ctx.drawImage(img3, -w / 2, -h / 2, w, h);
            ctx.restore();
            cropped3 = canvas.toDataURL();
            tryCombine();
        };

        img4.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = w;
            canvas.height = h;

            const ctx = canvas.getContext("2d");

            ctx.beginPath();
            ctx.moveTo(0, 750);
            ctx.lineTo(1000, 750);
            ctx.lineTo(1000, 1000);
            ctx.lineTo(0, 1000);
            ctx.closePath();
            ctx.clip();
            ctx.drawImage(img4, 0, 0, 1000, 1000);
            cropped4 = canvas.toDataURL();
            tryCombine();
        };
        img5.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;
            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(500, 0);
            ctx.lineTo(1000, 0);
            ctx.lineTo(1000, 250);
            ctx.lineTo(500, 250);
            ctx.closePath();
            ctx.clip();
            ctx.save();
            ctx.translate(x + w / 2, y + h / 2);
            ctx.rotate(2 * (Math.PI / 2));
            ctx.drawImage(img5, -w / 2, -h / 2, w, h);
            ctx.restore();
            cropped5 = canvas.toDataURL();
            tryCombine();
        };
        img6.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;

            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(0, 250);
            ctx.lineTo(500, 250);
            ctx.lineTo(500, 500);
            ctx.lineTo(0, 1000);
            ctx.closePath();
            ctx.clip();
            ctx.translate(x + w / 2, y + h / 2);
            ctx.rotate(2 * (Math.PI / 2));
            ctx.drawImage(img6, -w / 2, -h / 2, w, h);
            cropped6 = canvas.toDataURL();
            tryCombine();
        };
        img7.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;
            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(500, 250);
            ctx.lineTo(1000, 250);
            ctx.lineTo(1000, 1000);
            ctx.lineTo(500, 500);
            ctx.closePath();
            ctx.clip();
            ctx.save();
            ctx.translate(x + w / 2, y + h / 2);
            ctx.rotate(2 * (Math.PI / 2));
            ctx.drawImage(img7, -w / 2, -h / 2, w, h);
            ctx.restore();
            cropped7 = canvas.toDataURL();
            tryCombine();
        };
        bgImg.onload = () => {
            bgLoaded = true;
            tryCombine();
        };

        img1.onerror = reject;
        img2.onerror = reject;
        img3.onerror = reject;
        img4.onerror = reject;
        img5.onerror = reject;
        img6.onerror = reject;
        img7.onerror = reject;

        bgImg.onerror = reject;
    });
};
const GenPaperH = (url1, url2) => {
    const w = 1000, h = 1000;
    const x = 0, y = 0;

    return new Promise((resolve, reject) => {
        const img1 = new Image();
        const img2 = new Image();
        const img3 = new Image();
        const img4 = new Image();
        const img5 = new Image();
        const img6 = new Image();
        const img7 = new Image();
        const img8 = new Image();
        const bgImg = new Image();

        img1.crossOrigin = "anonymous";
        img2.crossOrigin = "anonymous";
        img3.crossOrigin = "anonymous";
        img4.crossOrigin = "anonymous";
        img5.crossOrigin = "anonymous";
        img6.crossOrigin = "anonymous";
        img7.crossOrigin = "anonymous";
        img8.crossOrigin = "anonymous";
        bgImg.crossOrigin = "anonymous";

        img1.src = url1;
        img2.src = url2;
        img3.src = url1;
        img4.src = url2;
        img5.src = url1;
        img6.src = url2;
        img7.src = url1;
        img8.src = url2;
        bgImg.src = "/bgimage.png";

        let cropped1 = null;
        let cropped2 = null;
        let cropped3 = null;
        let cropped4 = null;
        let cropped5 = null;
        let cropped6 = null;
        let cropped7 = null;
        let cropped8 = null;
        let bgLoaded = false;

        const tryCombine = () => {
            if (cropped1 && cropped2 && cropped3 && cropped4 && cropped5 && cropped6 && bgLoaded) {
                const finalCanvas = document.createElement("canvas");
                finalCanvas.width = 2000;
                finalCanvas.height = 2000;
                const ctx = finalCanvas.getContext("2d");

                ctx.drawImage(bgImg, 0, 0, finalCanvas.width, finalCanvas.height);

                const imgA = new Image();
                const imgB = new Image();
                const imgC = new Image();
                const imgD = new Image();
                const imgE = new Image();
                const imgF = new Image();
                const imgG = new Image();
                const imgH = new Image();
                imgA.onload = () => {
                    imgB.onload = () => {
                        imgC.onload = () => {
                            imgD.onload = () => {
                                imgE.onload = () => {
                                    imgF.onload = () => {
                                        imgG.onload = () => {
                                            imgH.onload = () => {
                                                ctx.drawImage(imgA, 0, 1000, 1000, 1000);
                                                ctx.drawImage(imgB, 0, 0, 1000, 1000);
                                                ctx.drawImage(imgC, 1000, 1000, 1000, 1000);
                                                ctx.drawImage(imgD, 1000, 0, 1000, 1000);
                                                ctx.drawImage(imgE, -500, 1000, 1000, 1000);
                                                ctx.drawImage(imgF, -500, 0, 1000, 1000);
                                                ctx.drawImage(imgG, 500, 1000, 1000, 1000);
                                                ctx.drawImage(imgH, 500, 0, 1000, 1000);
                                                const finalUrl = finalCanvas.toDataURL();
                                                resolve(finalUrl);
                                            }
                                            imgH.src = cropped8
                                        }
                                        imgG.src = cropped7
                                    }
                                    imgF.src = cropped6
                                }
                                imgE.src = cropped5
                            };
                            imgD.src = cropped4
                        };
                        imgC.src = cropped3;
                    };
                    imgB.src = cropped2;
                };
                imgA.src = cropped1;
            }
        };

        img1.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;
            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(0, 250);
            ctx.lineTo(250, 250);
            ctx.lineTo(250, 1000);
            ctx.lineTo(0, 1000);
            ctx.closePath();
            ctx.clip();
            ctx.drawImage(img1, 0, 0, 1000, 1000);
            cropped1 = canvas.toDataURL();
            tryCombine();
        };

        img2.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;
            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(250, 0);
            ctx.lineTo(250, 750);
            ctx.lineTo(0, 750);
            ctx.closePath();
            ctx.clip();
            ctx.translate(x + w / 2, y + h / 2);
            ctx.rotate(2 * (Math.PI / 2));
            ctx.drawImage(img2, -w / 2, -h / 2, w, h);
            cropped2 = canvas.toDataURL();
            tryCombine();
        };
        img3.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = w;
            canvas.height = h;

            const ctx = canvas.getContext("2d");

            ctx.beginPath();
            ctx.moveTo(500, 0);
            ctx.lineTo(1000, 0);
            ctx.lineTo(1000, 1000);
            ctx.lineTo(500, 1000);
            ctx.closePath();
            ctx.clip();
            ctx.drawImage(img3, 0, 0, 1000, 1000);
            cropped3 = canvas.toDataURL();
            tryCombine();
        };

        img4.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = w;
            canvas.height = h;

            const ctx = canvas.getContext("2d");

            ctx.beginPath();
            ctx.moveTo(500, 0);
            ctx.lineTo(1000, 0);
            ctx.lineTo(1000, 1000);
            ctx.lineTo(500, 1000);
            ctx.closePath();
            ctx.clip();
            ctx.translate(x + w / 2, y + h / 2);
            ctx.rotate(2 * (Math.PI / 2));
            ctx.drawImage(img4, -w / 2, -h / 2, w, h);
            cropped4 = canvas.toDataURL();
            tryCombine();
        };
        img5.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;
            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(750, 0);
            ctx.lineTo(1000, 0);
            ctx.lineTo(750, 250);
            ctx.closePath();
            ctx.clip();
            ctx.save();
            ctx.translate(x + w / 2, y + h / 2);
            ctx.rotate((Math.PI / 2));
            ctx.drawImage(img5, -w / 2, -h / 2, w, h);
            ctx.restore();
            cropped5 = canvas.toDataURL();
            tryCombine();
        };
        img6.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;

            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(750, 750);
            ctx.lineTo(1000, 1000);
            ctx.lineTo(750, 1000);
            ctx.closePath();
            ctx.clip();
            ctx.save();
            ctx.translate(x + w / 2, y + h / 2);
            ctx.rotate((Math.PI / 2));
            ctx.drawImage(img6, -w / 2, -h / 2, w, h);
            ctx.restore();
            cropped6 = canvas.toDataURL();
            tryCombine();
        };
        img7.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;
            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(500, 0);
            ctx.lineTo(500, 1000);
            ctx.lineTo(250, 1000);
            ctx.lineTo(250, 250);
            ctx.closePath();
            ctx.clip();
            ctx.drawImage(img7, 0, 0, w, h);
            cropped7 = canvas.toDataURL();
            tryCombine();
        };
        img8.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;
            const w = 1000, h = 1000;
            const x = 0, y = 0;
            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(250, 0);
            ctx.lineTo(500, 0);
            ctx.lineTo(500, 1000);
            ctx.lineTo(0, 1000);
            ctx.lineTo(250, 750);
            ctx.closePath();
            ctx.clip();
            ctx.save();
            ctx.translate(x + w / 2, y + h / 2);
            ctx.rotate(2 * (Math.PI / 2));
            ctx.drawImage(img8, -w / 2, -h / 2, w, h);
            ctx.restore();

            cropped8 = canvas.toDataURL();
            tryCombine();
        };
        bgImg.onload = () => {
            bgLoaded = true;
            tryCombine();
        };

        img1.onerror = reject;
        img2.onerror = reject;
        img3.onerror = reject;
        img4.onerror = reject;
        img5.onerror = reject;
        img6.onerror = reject;
        img7.onerror = reject;
        img8.onerror = reject;
        bgImg.onerror = reject;
    });
};

const GenPaperI = (url1, url2) => {
    const w = 1000, h = 1000;
    const x = 0, y = 0;

    return new Promise((resolve, reject) => {
        const img1 = new Image();
        const img2 = new Image();
        const img3 = new Image();
        const img4 = new Image();
        const img5 = new Image();
        const img6 = new Image();
        const img7 = new Image();
        const img8 = new Image();
        const img9 = new Image();
        const img10 = new Image();
        const img11 = new Image();
        const img12 = new Image();
        const img13 = new Image();
        const bgImg = new Image();

        img1.crossOrigin = "anonymous";
        img2.crossOrigin = "anonymous";
        img3.crossOrigin = "anonymous";
        img4.crossOrigin = "anonymous";
        img5.crossOrigin = "anonymous";
        img6.crossOrigin = "anonymous";
        img7.crossOrigin = "anonymous";
        img8.crossOrigin = "anonymous";
        img9.crossOrigin = "anonymous";
        img10.crossOrigin = "anonymous";
        img11.crossOrigin = "anonymous";
        img12.crossOrigin = "anonymous";
        img13.crossOrigin = "anonymous";
        bgImg.crossOrigin = "anonymous";

        img1.src = url2;
        img2.src = url2;
        img3.src = url2;
        img4.src = url1;
        img5.src = url1;
        img6.src = url1;
        img7.src = url1;
        img8.src = url1;
        img9.src = url1;
        img10.src = url1;
        img11.src = url1;
        img12.src = url1;
        img13.src = url1;
        bgImg.src = "/bgimage.png";

        let cropped1 = null;
        let cropped2 = null;
        let cropped3 = null;
        let cropped4 = null;
        let cropped5 = null;
        let cropped6 = null;
        let cropped7 = null;
        let cropped8 = null;
        let cropped9 = null;
        let cropped10 = null;
        let cropped11 = null;
        let cropped12 = null;
        let cropped13 = null;
        let bgLoaded = false;

        const tryCombine = () => {
            if (cropped1 && cropped2 && cropped3 && cropped4 && cropped5 && cropped6 && cropped7 && cropped8 && cropped9 && cropped10 && cropped11 && cropped12 && cropped13 && bgLoaded) {
                const finalCanvas = document.createElement("canvas");
                finalCanvas.width = 2000;
                finalCanvas.height = 2000;
                const ctx = finalCanvas.getContext("2d");

                ctx.drawImage(bgImg, 0, 0, finalCanvas.width, finalCanvas.height);

                const imgA = new Image();
                const imgB = new Image();
                const imgC = new Image();
                const imgD = new Image();
                const imgE = new Image();
                const imgF = new Image();
                const imgG = new Image();
                const imgH = new Image();
                const imgI = new Image();
                const imgJ = new Image();
                const imgK = new Image();
                const imgL = new Image();
                const imgM = new Image();
                imgA.onload = () => {
                    imgB.onload = () => {
                        imgC.onload = () => {
                            imgD.onload = () => {
                                imgE.onload = () => {
                                    imgF.onload = () => {
                                        imgG.onload = () => {
                                            imgH.onload = () => {
                                                imgI.onload = () => {
                                                    imgJ.onload = () => {
                                                        imgK.onload = () => {
                                                            imgL.onload = () => {
                                                                imgM.onload = () => {
                                                                    ctx.drawImage(imgA, 0, 500, 1000, 1000);
                                                                    ctx.drawImage(imgB, 500, 500, 1000, 1000);
                                                                    ctx.drawImage(imgC, 1000, 500, 1000, 1000);
                                                                    ctx.drawImage(imgD, 0, -500, 1000, 1000);
                                                                    ctx.drawImage(imgE, 0, -500, 1000, 1000);
                                                                    ctx.drawImage(imgF, 500, -500, 1000, 1000);
                                                                    ctx.drawImage(imgG, 1000, -500, 1000, 1000);
                                                                    ctx.drawImage(imgH, 1000, -500, 1000, 1000);
                                                                    ctx.drawImage(imgI, 0, 1500, 1000, 1000);
                                                                    ctx.drawImage(imgJ, 0, 1500, 1000, 1000);
                                                                    ctx.drawImage(imgK, 1000, 1500, 1000, 1000);
                                                                    ctx.drawImage(imgL, 500, 1500, 1000, 1000);
                                                                    ctx.drawImage(imgM, 1000, 1500, 1000, 1000);
                                                                    const finalUrl = finalCanvas.toDataURL();
                                                                    resolve(finalUrl);

                                                                }
                                                                imgM.src = cropped13
                                                            }
                                                            imgL.src = cropped12

                                                        }
                                                        imgK.src = cropped11
                                                    }
                                                    imgJ.src = cropped10

                                                }
                                                imgI.src = cropped9
                                            }
                                            imgH.src = cropped8
                                        }
                                        imgG.src = cropped7
                                    }
                                    imgF.src = cropped6
                                }
                                imgE.src = cropped5
                            };
                            imgD.src = cropped4
                        };
                        imgC.src = cropped3;
                    };
                    imgB.src = cropped2;
                };
                imgA.src = cropped1;
            }
        };

        img1.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;
            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(250, 0);
            ctx.lineTo(250, 1000);
            ctx.lineTo(0, 1000);
            ctx.closePath();
            ctx.clip();
            ctx.drawImage(img1, 0, 0, 1000, 1000);
            cropped1 = canvas.toDataURL();
            tryCombine();
        };

        img2.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;
            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(250, 0);
            ctx.lineTo(750, 0);
            ctx.lineTo(750, 1000);
            ctx.lineTo(250, 1000);
            ctx.closePath();
            ctx.clip();
            ctx.drawImage(img2, 0, 0, w, h);
            cropped2 = canvas.toDataURL();
            tryCombine();
        };
        img3.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = w;
            canvas.height = h;

            const ctx = canvas.getContext("2d");

            ctx.beginPath();
            ctx.moveTo(750, 0);
            ctx.lineTo(1000, 0);
            ctx.lineTo(1000, 1000);
            ctx.lineTo(750, 1000);
            ctx.closePath();
            ctx.clip();
            ctx.drawImage(img3, 0, 0, 1000, 1000);
            cropped3 = canvas.toDataURL();
            tryCombine();
        };

        img4.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = w;
            canvas.height = h;

            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(0, 500);
            ctx.lineTo(500, 500);
            ctx.lineTo(250, 750);
            ctx.lineTo(250, 1000);
            ctx.lineTo(0, 1000);
            ctx.closePath();
            ctx.clip();
            ctx.translate(x + w / 2, y + h / 2);
            ctx.rotate(2 * (Math.PI / 2));
            ctx.drawImage(img4, -w / 2, -h / 2, w, h);
            cropped4 = canvas.toDataURL();
            tryCombine();
        };
        img5.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;
            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(500, 500);
            ctx.lineTo(1000, 500);
            ctx.lineTo(750, 750);
            ctx.closePath();
            ctx.clip();
            ctx.save();
            ctx.translate(x + w / 2, y + h / 2);
            ctx.rotate((Math.PI / 2));
            ctx.drawImage(img5, -w / 2, -h / 2, w, h);
            ctx.restore();
            cropped5 = canvas.toDataURL();
            tryCombine();
        };
        img6.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;

            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(250, 750);
            ctx.lineTo(500, 1000);
            ctx.lineTo(750, 750);
            ctx.lineTo(750, 1000);
            ctx.lineTo(250, 1000);
            ctx.closePath();
            ctx.clip();
            ctx.save();
            ctx.translate(x + w / 2, y + h / 2);
            ctx.rotate(2 * (Math.PI / 2));
            ctx.drawImage(img6, -w / 2, -h / 2, w, h);
            ctx.restore();
            cropped6 = canvas.toDataURL();
            tryCombine();
        };
        img7.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;
            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(0, 500);
            ctx.lineTo(500, 500);
            ctx.lineTo(250, 750);
            ctx.closePath();
            ctx.clip();
            ctx.save();
            ctx.translate(x + w / 2, y + h / 2);
            ctx.rotate(- (Math.PI / 2));
            ctx.drawImage(img7, -w / 2, -h / 2, w, h);
            ctx.restore();
            cropped7 = canvas.toDataURL();
            tryCombine();
        };
        img8.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;
            const w = 1000, h = 1000;
            const x = 0, y = 0;
            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(500, 500);
            ctx.lineTo(1000, 500);
            ctx.lineTo(1000, 1000);
            ctx.lineTo(750, 1000);
            ctx.lineTo(750, 750);
            ctx.closePath();
            ctx.clip();
            ctx.save();
            ctx.translate(x + w / 2, y + h / 2);
            ctx.rotate(2 * (Math.PI / 2));
            ctx.drawImage(img8, -w / 2, -h / 2, w, h);
            ctx.restore();

            cropped8 = canvas.toDataURL();
            tryCombine();
        };
        img9.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;
            const w = 1000, h = 1000;
            const x = 0, y = 0;
            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(250, 0);
            ctx.lineTo(250, 250);
            ctx.lineTo(500, 500);
            ctx.lineTo(0, 500);
            ctx.closePath();
            ctx.clip();
            ctx.save();
            ctx.translate(x + w / 2, y + h / 2);
            ctx.rotate(2 * (Math.PI / 2));
            ctx.drawImage(img9, -w / 2, -h / 2, w, h);
            ctx.restore();

            cropped9 = canvas.toDataURL();
            tryCombine();
        };
        img10.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;
            const w = 1000, h = 1000;
            const x = 0, y = 0;
            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(500, 500);
            ctx.lineTo(750, 250);
            ctx.lineTo(1000, 500);
            ctx.closePath();
            ctx.clip();
            ctx.save();
            ctx.translate(x + w / 2, y + h / 2);
            ctx.rotate(-(Math.PI / 2));
            ctx.drawImage(img10, -w / 2, -h / 2, w, h);
            ctx.restore();

            cropped10 = canvas.toDataURL();
            tryCombine();
        };
        img11.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;
            const w = 1000, h = 1000;
            const x = 0, y = 0;
            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(0, 500);
            ctx.lineTo(250, 250);
            ctx.lineTo(500, 500);
            ctx.closePath();
            ctx.clip();
            ctx.save();
            ctx.translate(x + w / 2, y + h / 2);
            ctx.rotate((Math.PI / 2));
            ctx.drawImage(img11, -w / 2, -h / 2, w, h);
            ctx.restore();

            cropped11 = canvas.toDataURL();
            tryCombine();
        };
        img12.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;
            const w = 1000, h = 1000;
            const x = 0, y = 0;
            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(250, 0);
            ctx.lineTo(750, 0);
            ctx.lineTo(750, 250);
            ctx.lineTo(500, 0);
            ctx.lineTo(250, 250);
            ctx.closePath();
            ctx.clip();
            ctx.save();
            ctx.translate(x + w / 2, y + h / 2);
            ctx.rotate(2 * (Math.PI / 2));
            ctx.drawImage(img12, -w / 2, -h / 2, w, h);
            ctx.restore();

            cropped12 = canvas.toDataURL();
            tryCombine();
        };
        img13.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;
            const w = 1000, h = 1000;
            const x = 0, y = 0;
            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(750, 0);
            ctx.lineTo(1000, 0);
            ctx.lineTo(1000, 500);
            ctx.lineTo(500, 500);
            ctx.lineTo(750, 250);
            ctx.closePath();
            ctx.clip();
            ctx.save();
            ctx.translate(x + w / 2, y + h / 2);
            ctx.rotate(2 * (Math.PI / 2));
            ctx.drawImage(img13, -w / 2, -h / 2, w, h);
            ctx.restore();

            cropped13 = canvas.toDataURL();
            tryCombine();
        };
        bgImg.onload = () => {
            bgLoaded = true;
            tryCombine();
        };

        img1.onerror = reject;
        img2.onerror = reject;
        img3.onerror = reject;
        img4.onerror = reject;
        img5.onerror = reject;
        img6.onerror = reject;
        img7.onerror = reject;
        img8.onerror = reject;
        img9.onerror = reject;
        img10.onerror = reject;
        img11.onerror = reject;
        img12.onerror = reject;
        img13.onerror = reject;
        bgImg.onerror = reject;
    });
};
const GenPaperJ = (url1, url2) => {
    const w = 1000, h = 1000;
    const x = 0, y = 0;

    return new Promise((resolve, reject) => {
        const img1 = new Image();
        const img2 = new Image();
        const img3 = new Image();
        const img4 = new Image();
        const img5 = new Image();
        const img6 = new Image();
        const img7 = new Image();
        const img8 = new Image();
        const img9 = new Image();
        const img10 = new Image();
        const bgImg = new Image();

        img1.crossOrigin = "anonymous";
        img2.crossOrigin = "anonymous";
        img3.crossOrigin = "anonymous";
        img4.crossOrigin = "anonymous";
        img5.crossOrigin = "anonymous";
        img6.crossOrigin = "anonymous";
        img7.crossOrigin = "anonymous";
        img8.crossOrigin = "anonymous";
        img9.crossOrigin = "anonymous";
        img10.crossOrigin = "anonymous";
        bgImg.crossOrigin = "anonymous";

        img1.src = url2;
        img2.src = url2;
        img3.src = url2;
        img4.src = url1;
        img5.src = url1;
        img6.src = url1;
        img7.src = url1;
        img8.src = url1;
        img9.src = url1;
        img10.src = url1;
        bgImg.src = "/bgimage.png";

        let cropped1 = null;
        let cropped2 = null;
        let cropped3 = null;
        let cropped4 = null;
        let cropped5 = null;
        let cropped6 = null;
        let cropped7 = null;
        let cropped8 = null;
        let cropped9 = null;
        let cropped10 = null;
        let bgLoaded = false;

        const tryCombine = () => {
            if (cropped1 && cropped2 && cropped3 && cropped4 && cropped5 && cropped6 && cropped7 && cropped8 && cropped9 && cropped10 && bgLoaded) {
                const finalCanvas = document.createElement("canvas");
                finalCanvas.width = 2000;
                finalCanvas.height = 2000;
                const ctx = finalCanvas.getContext("2d");

                ctx.drawImage(bgImg, 0, 0, finalCanvas.width, finalCanvas.height);

                const imgA = new Image();
                const imgB = new Image();
                const imgC = new Image();
                const imgD = new Image();
                const imgE = new Image();
                const imgF = new Image();
                const imgG = new Image();
                const imgH = new Image();
                const imgI = new Image();
                const imgJ = new Image();
                imgA.onload = () => {
                    imgB.onload = () => {
                        imgC.onload = () => {
                            imgD.onload = () => {
                                imgE.onload = () => {
                                    imgF.onload = () => {
                                        imgG.onload = () => {
                                            imgH.onload = () => {
                                                imgI.onload = () => {
                                                    imgJ.onload = () => {
                                                        ctx.drawImage(imgA, 0, 500, 1000, 1000);
                                                        ctx.drawImage(imgB, 1000, 500, 1000, 1000);
                                                        ctx.drawImage(imgC, 500, 1000, 1000, 1000);
                                                        ctx.drawImage(imgD, -500, 1000, 1000, 1000);
                                                        ctx.drawImage(imgE, 1500, 1000, 1000, 1000);
                                                        ctx.drawImage(imgF, 0, -500, 1000, 1000);
                                                        ctx.drawImage(imgG, 1000, -500, 1000, 1000);
                                                        ctx.drawImage(imgH, 500, -500, 1000, 1000);
                                                        ctx.drawImage(imgI, 250, -250, 1000, 1000);
                                                        ctx.drawImage(imgJ, 750, -250, 1000, 1000);
                                                        const finalUrl = finalCanvas.toDataURL();
                                                        resolve(finalUrl);
                                                    }
                                                    imgJ.src = cropped10

                                                }
                                                imgI.src = cropped9
                                            }
                                            imgH.src = cropped8
                                        }
                                        imgG.src = cropped7
                                    }
                                    imgF.src = cropped6
                                }
                                imgE.src = cropped5
                            };
                            imgD.src = cropped4
                        };
                        imgC.src = cropped3;
                    };
                    imgB.src = cropped2;
                };
                imgA.src = cropped1;
            }
        };

        img1.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;
            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(500, 0);
            ctx.lineTo(500, 500);
            ctx.lineTo(0, 500);
            ctx.closePath();
            ctx.clip();
            ctx.drawImage(img1, 0, 0, 1000, 1000);
            cropped1 = canvas.toDataURL();
            tryCombine();
        };

        img2.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;
            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(500, 0);
            ctx.lineTo(1000, 0);
            ctx.lineTo(1000, 500);
            ctx.lineTo(500, 500);
            ctx.closePath();
            ctx.clip();
            ctx.drawImage(img2, 0, 0, w, h);
            cropped2 = canvas.toDataURL();
            tryCombine();
        };
        img3.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = w;
            canvas.height = h;

            const ctx = canvas.getContext("2d");

            ctx.beginPath();
            ctx.moveTo(0, 500);
            ctx.lineTo(1000, 500);
            ctx.lineTo(1000, 1000);
            ctx.lineTo(0, 1000);
            ctx.closePath();
            ctx.clip();
            ctx.drawImage(img3, 0, 0, 1000, 1000);
            cropped3 = canvas.toDataURL();
            tryCombine();
        };

        img4.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = w;
            canvas.height = h;

            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(500, 500);
            ctx.lineTo(1000, 500);
            ctx.lineTo(1000, 1000);
            ctx.lineTo(500, 1000);
            ctx.closePath();
            ctx.clip();
            ctx.drawImage(img4, 0, 0, w, h);
            cropped4 = canvas.toDataURL();
            tryCombine();
        };
        img5.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;
            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(0, 500);
            ctx.lineTo(500, 500);
            ctx.lineTo(500, 1000);
            ctx.lineTo(0, 1000);
            ctx.closePath();
            ctx.clip();
            ctx.drawImage(img5, 0, 0, w, h);
            ctx.restore();
            cropped5 = canvas.toDataURL();
            tryCombine();
        };
        img6.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;

            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(0, 500);
            ctx.lineTo(250, 500);
            ctx.lineTo(250, 750);
            ctx.lineTo(500, 750);
            ctx.lineTo(500, 1000);
            ctx.lineTo(0, 1000);
            ctx.closePath();
            ctx.clip();
            ctx.translate(x + w / 2, y + h / 2);
            ctx.rotate(2 * (Math.PI / 2));
            ctx.drawImage(img7, -w / 2, -h / 2, w, h);
            cropped6 = canvas.toDataURL();
            tryCombine();
        };
        img7.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;
            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(750, 500);
            ctx.lineTo(1000, 500);
            ctx.lineTo(1000, 1000);
            ctx.lineTo(500, 1000);
            ctx.lineTo(500, 750);
            ctx.lineTo(750, 750);
            ctx.closePath();
            ctx.clip();
            ctx.save();
            ctx.translate(x + w / 2, y + h / 2);
            ctx.rotate(2 * (Math.PI / 2));
            ctx.drawImage(img7, -w / 2, -h / 2, w, h);
            ctx.restore();
            cropped7 = canvas.toDataURL();
            tryCombine();
        };
        img8.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;
            const w = 1000, h = 1000;
            const x = 0, y = 0;
            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(250, 500);
            ctx.lineTo(750, 500);
            ctx.lineTo(500, 750);
            ctx.closePath();
            ctx.clip();
            ctx.save();
            ctx.translate(x + w / 2, y + h / 2);
            ctx.rotate(2 * (Math.PI / 2));
            ctx.drawImage(img8, -w / 2, -h / 2, w, h);
            ctx.restore();

            cropped8 = canvas.toDataURL();
            tryCombine();
        };
        img9.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;
            const w = 1000, h = 1000;
            const x = 0, y = 0;
            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(250, 250);
            ctx.lineTo(500, 250);
            ctx.lineTo(250, 500);
            ctx.closePath();
            ctx.clip();
            ctx.save();
            ctx.translate(x + w / 2, y + h / 2);
            ctx.rotate(-(Math.PI / 2));
            ctx.drawImage(img9, -w / 2, -h / 2, w, h);
            ctx.restore();

            cropped9 = canvas.toDataURL();
            tryCombine();
        };
        img10.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;
            const w = 1000, h = 1000;
            const x = 0, y = 0;
            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(500, 250);
            ctx.lineTo(750, 250);
            ctx.lineTo(750, 500);
            ctx.closePath();
            ctx.clip();
            ctx.save();
            ctx.translate(x + w / 2, y + h / 2);
            ctx.rotate((Math.PI / 2));
            ctx.drawImage(img10, -w / 2, -h / 2, w, h);
            ctx.restore();

            cropped10 = canvas.toDataURL();
            tryCombine();
        };

        bgImg.onload = () => {
            bgLoaded = true;
            tryCombine();
        };

        img1.onerror = reject;
        img2.onerror = reject;
        img3.onerror = reject;
        img4.onerror = reject;
        img5.onerror = reject;
        img6.onerror = reject;
        img7.onerror = reject;
        img8.onerror = reject;
        img9.onerror = reject;
        img10.onerror = reject;
        bgImg.onerror = reject;
    });
};
const GenPaperK = (url1, url2) => {
    const w = 1000, h = 1000;
    const x = 0, y = 0;

    return new Promise((resolve, reject) => {
        const img1 = new Image();
        const img2 = new Image();
        const img3 = new Image();
        const img4 = new Image();
        const img5 = new Image();
        const img6 = new Image();
        const bgImg = new Image();

        img1.crossOrigin = "anonymous";
        img2.crossOrigin = "anonymous";
        img3.crossOrigin = "anonymous";
        img4.crossOrigin = "anonymous";
        img5.crossOrigin = "anonymous";
        img6.crossOrigin = "anonymous";

        bgImg.crossOrigin = "anonymous";

        img1.src = url1;
        img2.src = url2;
        img3.src = url1;
        img4.src = url2;
        img5.src = url1;
        img6.src = url2;

        bgImg.src = "/bgimage.png";

        let cropped1 = null;
        let cropped2 = null;
        let cropped3 = null;
        let cropped4 = null;
        let cropped5 = null;
        let cropped6 = null;

        let bgLoaded = false;

        const tryCombine = () => {
            if (cropped1 && cropped2 && cropped3 && cropped4 && cropped5 && cropped6 && bgLoaded) {
                const finalCanvas = document.createElement("canvas");
                finalCanvas.width = 2000;
                finalCanvas.height = 2000;
                const ctx = finalCanvas.getContext("2d");

                ctx.drawImage(bgImg, 0, 0, finalCanvas.width, finalCanvas.height);

                const imgA = new Image();
                const imgB = new Image();
                const imgC = new Image();
                const imgD = new Image();
                const imgE = new Image();
                const imgF = new Image();
                imgA.onload = () => {
                    imgB.onload = () => {
                        imgC.onload = () => {
                            imgD.onload = () => {
                                imgE.onload = () => {
                                    imgF.onload = () => {
                                        ctx.drawImage(imgA, 0, 0, 1000, 1000);
                                        ctx.drawImage(imgB, 1000, 1000, 1000, 1000);
                                        ctx.drawImage(imgC, 1000, 0, 1000, 1000);
                                        ctx.drawImage(imgD, 0, 1000, 1000, 1000);
                                        ctx.drawImage(imgE, 1000, 1000, 1000, 1000);
                                        ctx.drawImage(imgF, 0, 0, 1000, 1000);
                                        // ctx.drawImage(imgG, 500, 1000, 1000, 1000);
                                        // ctx.drawImage(imgH, 500, 0, 1000, 1000);
                                        const finalUrl = finalCanvas.toDataURL();
                                        resolve(finalUrl);
                                    }
                                    imgF.src = cropped6
                                }
                                imgE.src = cropped5
                            };
                            imgD.src = cropped4
                        };
                        imgC.src = cropped3;
                    };
                    imgB.src = cropped2;
                };
                imgA.src = cropped1;
            }
        };

        img1.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;
            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(1000, 1000);
            ctx.lineTo(0, 1000);
            ctx.closePath();
            ctx.clip();
            ctx.drawImage(img1, 0, 0, 1000, 1000);
            cropped1 = canvas.toDataURL();
            tryCombine();
        };

        img2.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;
            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(1000, 0);
            ctx.lineTo(1000, 1000);
            ctx.closePath();
            ctx.clip();
            ctx.translate(x + w / 2, y + h / 2);
            ctx.rotate((Math.PI / 2));
            ctx.drawImage(img2, -w / 2, -h / 2, w, h);
            cropped2 = canvas.toDataURL();
            tryCombine();
        };
        img3.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = w;
            canvas.height = h;

            const ctx = canvas.getContext("2d");

            ctx.beginPath();
            ctx.moveTo(500, 500);
            ctx.lineTo(1000, 1000);
            ctx.lineTo(0, 1000);
            ctx.closePath();
            ctx.clip();
            ctx.drawImage(img3, 0, 0, 1000, 1000);
            ctx.translate(x + w / 2, y + h / 2);
            ctx.rotate((Math.PI / 2));
            ctx.drawImage(img5, -w / 2, -h / 2, w, h);
            cropped3 = canvas.toDataURL();
            tryCombine();
        };

        img4.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = w;
            canvas.height = h;

            const ctx = canvas.getContext("2d");

            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(1000, 0);
            ctx.lineTo(500, 500);
            ctx.closePath();
            ctx.clip();
            ctx.translate(x + w / 2, y + h / 2);
            ctx.rotate(2 * (Math.PI / 2));
            ctx.drawImage(img4, -w / 2, -h / 2, w, h);
            cropped4 = canvas.toDataURL();
            tryCombine();
        };
        img5.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;
            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(500, 500);
            ctx.lineTo(1000, 1000);
            ctx.lineTo(0, 1000);
            ctx.closePath();
            ctx.clip();
            ctx.save();
            ctx.translate(x + w / 2, y + h / 2);
            ctx.rotate(2 * (Math.PI / 2));
            ctx.drawImage(img5, -w / 2, -h / 2, w, h);
            ctx.restore();
            cropped5 = canvas.toDataURL();
            tryCombine();
        };
        img6.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;

            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(1000, 0);
            ctx.lineTo(500, 500);
            ctx.closePath();
            ctx.clip();
            ctx.save();
            ctx.translate(x + w / 2, y + h / 2);
            ctx.rotate(-(Math.PI / 2));
            ctx.drawImage(img6, -w / 2, -h / 2, w, h);
            ctx.restore();
            cropped6 = canvas.toDataURL();
            tryCombine();
        };

        bgImg.onload = () => {
            bgLoaded = true;
            tryCombine();
        };

        img1.onerror = reject;
        img2.onerror = reject;
        img3.onerror = reject;
        img4.onerror = reject;
        img5.onerror = reject;
        img6.onerror = reject;

        bgImg.onerror = reject;
    });
};

const GenPaperL = (url1, url2) => {
    const w = 1000, h = 1000;
    const x = 0, y = 0;

    return new Promise((resolve, reject) => {
        const img1 = new Image();
        const img2 = new Image();
        const img3 = new Image();
        const img4 = new Image();
        const img5 = new Image();
        const bgImg = new Image();

        img1.crossOrigin = "anonymous";
        img2.crossOrigin = "anonymous";
        img3.crossOrigin = "anonymous";
        img4.crossOrigin = "anonymous";
        img5.crossOrigin = "anonymous";

        bgImg.crossOrigin = "anonymous";

        img1.src = url1;
        img2.src = url2;
        img3.src = url2;
        img4.src = url2;
        img5.src = url2;

        bgImg.src = "/bgimage.png";

        let cropped1 = null;
        let cropped2 = null;
        let cropped3 = null;
        let cropped4 = null;
        let cropped5 = null;

        let bgLoaded = false;

        const tryCombine = () => {
            if (cropped1 && cropped2 && cropped3 && cropped4 && cropped5 && bgLoaded) {
                const finalCanvas = document.createElement("canvas");
                finalCanvas.width = 2000;
                finalCanvas.height = 2000;
                const ctx = finalCanvas.getContext("2d");

                ctx.drawImage(bgImg, 0, 0, finalCanvas.width, finalCanvas.height);

                const imgA = new Image();
                const imgB = new Image();
                const imgC = new Image();
                const imgD = new Image();
                const imgE = new Image();
                imgA.onload = () => {
                    imgB.onload = () => {
                        imgC.onload = () => {
                            imgD.onload = () => {
                                imgE.onload = () => {
                                    ctx.drawImage(imgA, 500, 0, 1000, 1000);
                                    ctx.drawImage(imgB, 1500, 0, 1000, 1000);
                                    ctx.drawImage(imgC, 1500, 1000, 1000, 1000);
                                    ctx.drawImage(imgD, -500, 0, 1000, 1000);
                                    ctx.drawImage(imgE, -500, 1000, 1000, 1000);
                                    const finalUrl = finalCanvas.toDataURL();
                                    resolve(finalUrl);
                                }
                                imgE.src = cropped5
                            };
                            imgD.src = cropped4
                        };
                        imgC.src = cropped3;
                    };
                    imgB.src = cropped2;
                };
                imgA.src = cropped1;
            }
        };

        img1.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;
            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(1000, 0);
            ctx.lineTo(1000, 1000);
            ctx.lineTo(0, 1000);
            ctx.closePath();
            ctx.clip();
            ctx.drawImage(img1, 0, 0, 1000, 1000);
            cropped1 = canvas.toDataURL();
            tryCombine();
        };

        img2.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;
            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(500, 0);
            ctx.lineTo(500, 500);
            ctx.lineTo(0, 1000);
            ctx.closePath();
            ctx.clip();
            ctx.drawImage(img2, 0, 0, w, h);
            cropped2 = canvas.toDataURL();
            tryCombine();
        };
        img3.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = w;
            canvas.height = h;

            const ctx = canvas.getContext("2d");

            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(500, 500);
            ctx.lineTo(500, 1000);
            ctx.lineTo(0, 1000);
            ctx.closePath();
            ctx.clip();
            ctx.drawImage(img3, 0, 0, 1000, 1000);
            ctx.translate(x + w / 2, y + h / 2);
            ctx.rotate((Math.PI / 2));
            ctx.drawImage(img3, -w / 2, -h / 2, w, h);
            cropped3 = canvas.toDataURL();
            tryCombine();
        };

        img4.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = w;
            canvas.height = h;

            const ctx = canvas.getContext("2d");

            ctx.beginPath();
            ctx.moveTo(500, 0);
            ctx.lineTo(1000, 0);
            ctx.lineTo(500, 500);
            ctx.closePath();
            ctx.clip();
            ctx.drawImage(img4, 0, 0, w, h);
            cropped4 = canvas.toDataURL();
            tryCombine();
        };
        img5.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;
            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(500, 500);
            ctx.lineTo(1000, 1000);
            ctx.lineTo(500, 1000);
            ctx.closePath();
            ctx.clip();
            ctx.save();
            ctx.translate(x + w / 2, y + h / 2);
            ctx.rotate((Math.PI / 2));
            ctx.drawImage(img5, -w / 2, -h / 2, w, h);
            ctx.restore();
            cropped5 = canvas.toDataURL();
            tryCombine();
        };


        bgImg.onload = () => {
            bgLoaded = true;
            tryCombine();
        };

        img1.onerror = reject;
        img2.onerror = reject;
        img3.onerror = reject;
        img4.onerror = reject;
        img5.onerror = reject;

        bgImg.onerror = reject;
    });
};
const GenPaperM = (url1, url2) => {
    const w = 1000, h = 1000;
    const x = 0, y = 0;

    return new Promise((resolve, reject) => {
        const img1 = new Image();
        const img2 = new Image();
        const img3 = new Image();
        const img4 = new Image();
        const img5 = new Image();
        const img6 = new Image();
        const img7 = new Image();
        const img8 = new Image();
        const bgImg = new Image();

        img1.crossOrigin = "anonymous";
        img2.crossOrigin = "anonymous";
        img3.crossOrigin = "anonymous";
        img4.crossOrigin = "anonymous";
        img5.crossOrigin = "anonymous";
        img6.crossOrigin = "anonymous";
        img7.crossOrigin = "anonymous";
        img8.crossOrigin = "anonymous";

        bgImg.crossOrigin = "anonymous";

        img1.src = url2;
        img2.src = url2;
        img3.src = url2;
        img4.src = url1;
        img5.src = url1;
        img6.src = url1;
        img7.src = url1;
        img8.src = url1;

        bgImg.src = "/bgimage.png";

        let cropped1 = null;
        let cropped2 = null;
        let cropped3 = null;
        let cropped4 = null;
        let cropped5 = null;
        let cropped6 = null;
        let cropped7 = null;
        let cropped8 = null;
        let bgLoaded = false;

        const tryCombine = () => {
            if (cropped1 && cropped2 && cropped3 && cropped4 && cropped5 && cropped6 && cropped7 && cropped8 && bgLoaded) {
                const finalCanvas = document.createElement("canvas");
                finalCanvas.width = 2000;
                finalCanvas.height = 2000;
                const ctx = finalCanvas.getContext("2d");

                ctx.drawImage(bgImg, 0, 0, finalCanvas.width, finalCanvas.height);

                const imgA = new Image();
                const imgB = new Image();
                const imgC = new Image();
                const imgD = new Image();
                const imgE = new Image();
                const imgF = new Image();
                const imgG = new Image();
                const imgH = new Image();
                imgA.onload = () => {
                    imgB.onload = () => {
                        imgC.onload = () => {
                            imgD.onload = () => {
                                imgE.onload = () => {
                                    imgF.onload = () => {
                                        imgG.onload = () => {
                                            imgH.onload = () => {
                                                ctx.drawImage(imgA, 250, 1000, 1000, 1000);
                                                ctx.drawImage(imgB, 1250, 0, 1000, 1000);
                                                ctx.drawImage(imgC, 750, 1500, 1000, 1000);
                                                ctx.drawImage(imgD, -750, 1000, 1000, 1000);
                                                ctx.drawImage(imgE, -250, -500, 1000, 1000);
                                                ctx.drawImage(imgF, 250, 0, 1000, 1000);
                                                ctx.drawImage(imgG, 1750, -500, 1000, 1000);
                                                ctx.drawImage(imgH, 1250, 1000, 1000, 1000);
                                                // ctx.drawImage(imgI, 250, -250, 1000, 1000);
                                                // ctx.drawImage(imgJ, 750, -250, 1000, 1000);
                                                const finalUrl = finalCanvas.toDataURL();
                                                resolve(finalUrl);
                                            }
                                            imgH.src = cropped8
                                        }
                                        imgG.src = cropped7
                                    }
                                    imgF.src = cropped6
                                }
                                imgE.src = cropped5
                            };
                            imgD.src = cropped4
                        };
                        imgC.src = cropped3;
                    };
                    imgB.src = cropped2;
                };
                imgA.src = cropped1;
            }
        };

        img1.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;
            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(1000, 0);
            ctx.lineTo(1000, 500);
            ctx.lineTo(500, 500);
            ctx.lineTo(500, 1000);
            ctx.lineTo(0, 1000);
            ctx.closePath();
            ctx.clip();
            ctx.translate(x + w / 2, y + h / 2);
            ctx.rotate(2 * (Math.PI / 2));
            ctx.drawImage(img1, -w / 2, -h / 2, w, h);
            cropped1 = canvas.toDataURL();
            tryCombine();
        };

        img2.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;
            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(500, 0);
            ctx.lineTo(0, 500);
            ctx.closePath();
            ctx.clip();
            ctx.drawImage(img2, 0, 0, w, h);
            cropped2 = canvas.toDataURL();
            tryCombine();
        };
        img3.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = w;
            canvas.height = h;

            const ctx = canvas.getContext("2d");

            ctx.beginPath();
            ctx.moveTo(500, 0);
            ctx.lineTo(1000, 500);
            ctx.lineTo(500, 500);
            ctx.closePath();
            ctx.clip();
            ctx.translate(x + w / 2, y + h / 2);
            ctx.rotate((Math.PI / 2));
            ctx.drawImage(img3, -w / 2, -h / 2, w, h);
            cropped3 = canvas.toDataURL();
            tryCombine();
        };

        img4.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = w;
            canvas.height = h;

            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(750, 750);
            ctx.lineTo(1000, 500);
            ctx.lineTo(1000, 1000);
            ctx.lineTo(750, 1000);
            ctx.closePath();
            ctx.clip();
            ctx.translate(x + w / 2, y + h / 2);
            ctx.rotate(2 * (Math.PI / 2));
            ctx.drawImage(img4, -w / 2, -h / 2, w, h);
            cropped4 = canvas.toDataURL();
            tryCombine();
        };
        img5.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;
            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(250, 500);
            ctx.lineTo(500, 500);
            ctx.lineTo(500, 1000);
            ctx.lineTo(250, 750);
            ctx.closePath();
            ctx.clip();
            ctx.translate(x + w / 2, y + h / 2);
            ctx.rotate(-(Math.PI / 2));
            ctx.drawImage(img5, -w / 2, -h / 2, w, h);
            ctx.restore();
            cropped5 = canvas.toDataURL();
            tryCombine();
        };
        img6.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;

            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(0, 500);
            ctx.lineTo(500, 500);
            ctx.lineTo(500, 0);
            ctx.lineTo(1000, 0);
            ctx.lineTo(1000, 1000);
            ctx.lineTo(0, 1000);
            ctx.closePath();
            ctx.clip();
            ctx.drawImage(img7, 0, 0, w, h);
            cropped6 = canvas.toDataURL();
            tryCombine();
        };
        img7.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;
            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(0, 500);
            ctx.lineTo(250, 500);
            ctx.lineTo(250, 750);
            ctx.closePath();
            ctx.clip();
            ctx.save();
            ctx.translate(x + w / 2, y + h / 2);
            ctx.rotate(-(Math.PI / 2));
            ctx.drawImage(img7, -w / 2, -h / 2, w, h);
            ctx.restore();
            cropped7 = canvas.toDataURL();
            tryCombine();
        };
        img8.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;
            const w = 1000, h = 1000;
            const x = 0, y = 0;
            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(500, 1000);
            ctx.lineTo(750, 750);
            ctx.lineTo(750, 1000);
            ctx.closePath();
            ctx.clip();
            ctx.save();
            ctx.translate(x + w / 2, y + h / 2);
            ctx.rotate(2 * (Math.PI / 2));
            ctx.drawImage(img8, -w / 2, -h / 2, w, h);
            ctx.restore();

            cropped8 = canvas.toDataURL();
            tryCombine();
        };

        bgImg.onload = () => {
            bgLoaded = true;
            tryCombine();
        };

        img1.onerror = reject;
        img2.onerror = reject;
        img3.onerror = reject;
        img4.onerror = reject;
        img5.onerror = reject;
        img6.onerror = reject;
        img7.onerror = reject;
        img8.onerror = reject;
        bgImg.onerror = reject;
    });
};

const GenPaperN = (url1, url2) => {
    const w = 1000, h = 1000;
    const x = 0, y = 0;

    return new Promise((resolve, reject) => {
        const img1 = new Image();
        const img2 = new Image();
        const img3 = new Image();
        const img4 = new Image();
        const img5 = new Image();
        const img6 = new Image();
        const img7 = new Image();
        const img8 = new Image();
        const img9 = new Image();
        const img10 = new Image();
        const img11 = new Image();
        const img12 = new Image();
        const bgImg = new Image();

        img1.crossOrigin = "anonymous";
        img2.crossOrigin = "anonymous";
        img3.crossOrigin = "anonymous";
        img4.crossOrigin = "anonymous";
        img5.crossOrigin = "anonymous";
        img6.crossOrigin = "anonymous";
        img7.crossOrigin = "anonymous";
        img8.crossOrigin = "anonymous";
        img9.crossOrigin = "anonymous";
        img10.crossOrigin = "anonymous";
        img11.crossOrigin = "anonymous";
        img12.crossOrigin = "anonymous";

        bgImg.crossOrigin = "anonymous";

        img1.src = url1;
        img2.src = url1;
        img3.src = url1;
        img4.src = url1;
        img5.src = url2;
        img6.src = url2;
        img7.src = url2;
        img8.src = url2;
        img9.src = url2;
        img10.src = url2;
        img11.src = url2;
        img12.src = url2;

        bgImg.src = "/bgimage.png";

        let cropped1 = null;
        let cropped2 = null;
        let cropped3 = null;
        let cropped4 = null;
        let cropped5 = null;
        let cropped6 = null;
        let cropped7 = null;
        let cropped8 = null;
        let cropped9 = null;
        let cropped10 = null;
        let cropped11 = null;
        let cropped12 = null;

        let bgLoaded = false;

        const tryCombine = () => {
            if (cropped1 && cropped2 && cropped3 && cropped4 && cropped5 && cropped6 && cropped7 && cropped8 && cropped9 && cropped10 && cropped11 && cropped12 && bgLoaded) {
                const finalCanvas = document.createElement("canvas");
                finalCanvas.width = 2000;
                finalCanvas.height = 2000;
                const ctx = finalCanvas.getContext("2d");

                ctx.drawImage(bgImg, 0, 0, finalCanvas.width, finalCanvas.height);

                const imgA = new Image();
                const imgB = new Image();
                const imgC = new Image();
                const imgD = new Image();
                const imgE = new Image();
                const imgF = new Image();
                const imgG = new Image();
                const imgH = new Image();
                const imgI = new Image();
                const imgJ = new Image();
                const imgK = new Image();
                const imgL = new Image();
                imgA.onload = () => {
                    imgB.onload = () => {
                        imgC.onload = () => {
                            imgD.onload = () => {
                                imgE.onload = () => {
                                    imgF.onload = () => {
                                        imgG.onload = () => {
                                            imgH.onload = () => {
                                                imgI.onload = () => {
                                                    imgJ.onload = () => {
                                                        imgK.onload = () => {
                                                            imgL.onload = () => {
                                                                ctx.drawImage(imgA, -500, -500, 1000, 1000);
                                                                ctx.drawImage(imgB, 1500, -500, 1000, 1000);
                                                                ctx.drawImage(imgC, 1500, 1500, 1000, 1000);
                                                                ctx.drawImage(imgD, -500, 1500, 1000, 1000);
                                                                ctx.drawImage(imgE, -500, 500, 1000, 1000);
                                                                ctx.drawImage(imgF, -500, 500, 1000, 1000);
                                                                ctx.drawImage(imgG, 1500, 500, 1000, 1000);
                                                                ctx.drawImage(imgH, 1500, 500, 1000, 1000);
                                                                ctx.drawImage(imgI, 500, 1500, 1000, 1000);
                                                                ctx.drawImage(imgJ, 500, 1500, 1000, 1000);
                                                                ctx.drawImage(imgK, 500, -500, 1000, 1000);
                                                                ctx.drawImage(imgL, 500, -500, 1000, 1000);
                                                                const finalUrl = finalCanvas.toDataURL();
                                                                resolve(finalUrl);
                                                            }
                                                            imgL.src = cropped12
                                                        }
                                                        imgK.src = cropped11
                                                    };
                                                    imgJ.src = cropped10
                                                };
                                                imgI.src = cropped9;
                                            };
                                            imgH.src = cropped8;
                                        };
                                        imgG.src = cropped7;

                                    }
                                    imgF.src = cropped6
                                }
                                imgE.src = cropped5
                            };
                            imgD.src = cropped4
                        };
                        imgC.src = cropped3;
                    };
                    imgB.src = cropped2;
                };
                imgA.src = cropped1;
            }
        };

        img1.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;
            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(500, 500);
            ctx.lineTo(1000, 500);
            ctx.lineTo(1000, 1000);
            ctx.lineTo(500, 1000);
            ctx.closePath();
            ctx.clip();
            ctx.translate(x + w / 2, y + h / 2);
            ctx.rotate(2 * (Math.PI / 2));
            ctx.drawImage(img1, -w / 2, -h / 2, w, h);
            cropped1 = canvas.toDataURL();
            tryCombine();
        };

        img2.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;
            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(0, 500);
            ctx.lineTo(500, 500);
            ctx.lineTo(500, 1000);
            ctx.lineTo(0, 1000);
            ctx.closePath();
            ctx.clip();
            ctx.drawImage(img2, 0, 0, w, h);
            cropped2 = canvas.toDataURL();
            tryCombine();
        };
        img3.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = w;
            canvas.height = h;

            const ctx = canvas.getContext("2d");

            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(500, 0);
            ctx.lineTo(500, 500);
            ctx.lineTo(0, 500);
            ctx.closePath();
            ctx.clip();
            ctx.drawImage(img3, 0, 0, 1000, 1000);
            ctx.translate(x + w / 2, y + h / 2);
            ctx.rotate(2 * (Math.PI / 2));
            ctx.drawImage(img3, -w / 2, -h / 2, w, h);
            cropped3 = canvas.toDataURL();
            tryCombine();
        };

        img4.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = w;
            canvas.height = h;

            const ctx = canvas.getContext("2d");

            ctx.beginPath();
            ctx.moveTo(500, 0);
            ctx.lineTo(1000, 0);
            ctx.lineTo(1000, 500);
            ctx.lineTo(500, 500);
            ctx.closePath();
            ctx.clip();
            ctx.drawImage(img4, 0, 0, w, h);
            cropped4 = canvas.toDataURL();
            tryCombine();
        };
        img5.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;
            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(500, 500);
            ctx.lineTo(1000, 1000);
            ctx.lineTo(500, 1000);
            ctx.closePath();
            ctx.clip();
            ctx.save();
            ctx.translate(x + w / 2, y + h / 2);
            ctx.rotate(2 * (Math.PI / 2));
            ctx.drawImage(img5, -w / 2, -h / 2, w, h);
            ctx.restore();
            cropped5 = canvas.toDataURL();
            tryCombine();
        };
        img6.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;

            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(500, 0);
            ctx.lineTo(1000, 0);
            ctx.lineTo(500, 500);
            ctx.closePath();
            ctx.clip();
            ctx.save();
            ctx.drawImage(img6, 0, 0, w, h);
            ctx.restore();
            cropped6 = canvas.toDataURL();
            tryCombine();
        };
        img7.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;

            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(0, 1000);
            ctx.lineTo(500, 500);
            ctx.lineTo(500, 1000);
            ctx.closePath();
            ctx.clip();
            ctx.save();
            ctx.drawImage(img7, 0, 0, w, h);
            ctx.restore();
            cropped7 = canvas.toDataURL();
            tryCombine();
        };
        img8.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;

            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(500, 0);
            ctx.lineTo(500, 500);
            ctx.closePath();
            ctx.clip();
            ctx.save();
            ctx.translate(x + w / 2, y + h / 2);
            ctx.rotate(2 * (Math.PI / 2));
            ctx.drawImage(img8, -w / 2, -h / 2, w, h);
            ctx.restore();
            cropped8 = canvas.toDataURL();
            tryCombine();
        };
        img9.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;

            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(500, 500);
            ctx.lineTo(1000, 0);
            ctx.lineTo(1000, 500);
            ctx.closePath();
            ctx.clip();
            ctx.save();
            ctx.translate(x + w / 2, y + h / 2);
            ctx.rotate(2 * (Math.PI / 2));
            ctx.drawImage(img9, -w / 2, -h / 2, w, h);
            cropped9 = canvas.toDataURL();
            tryCombine();
        };
        img10.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;

            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(500, 500);
            ctx.lineTo(0, 500);
            ctx.closePath();
            ctx.clip();
            ctx.save();
            ctx.drawImage(img10, 0, 0, w, h);
            ctx.restore();
            cropped10 = canvas.toDataURL();
            tryCombine();
        };
        img11.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;

            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(0, 500);
            ctx.lineTo(500, 500);
            ctx.lineTo(0, 1000);
            ctx.closePath();
            ctx.clip();
            ctx.save();
            ctx.translate(x + w / 2, y + h / 2);
            ctx.rotate(2 * (Math.PI / 2));
            ctx.drawImage(img11, -w / 2, -h / 2, w, h);
            ctx.restore();
            cropped11 = canvas.toDataURL();
            tryCombine();
        };
        img12.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1000;
            canvas.height = 1000;

            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(500, 500);
            ctx.lineTo(1000, 500);
            ctx.lineTo(1000, 1000);
            ctx.closePath();
            ctx.clip();
            ctx.save();
            ctx.drawImage(img12, 0, 0, w, h);
            ctx.restore();
            cropped12 = canvas.toDataURL();
            tryCombine();
        };

        bgImg.onload = () => {
            bgLoaded = true;
            tryCombine();
        };

        img1.onerror = reject;
        img2.onerror = reject;
        img3.onerror = reject;
        img4.onerror = reject;
        img5.onerror = reject;
        img6.onerror = reject;
        img7.onerror = reject;
        img8.onerror = reject;
        img9.onerror = reject;
        img10.onerror = reject;
        img11.onerror = reject;
        img12.onerror = reject;

        bgImg.onerror = reject;
    });
};
export { GenPaperA, GenPaperB, GenPaperC, GenPaperD, GenPaperE, GenPaperF, GenPaperG, GenPaperH, GenPaperI, GenPaperJ, GenPaperK, GenPaperL, GenPaperM, GenPaperN };
