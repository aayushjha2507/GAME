let player = prompt("ENTER THE PLAYER NAME")
let pattern = [
    [0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24],
    [0, 5, 10, 15, 20],
    [1, 6, 11, 16, 21],
    [2, 7, 12, 17, 22],
    [3, 8, 13, 18, 23],
    [4, 9, 14, 19, 24],
    [0, 6, 12, 18, 24],
    [4, 8, 12, 16, 20]
]
let a = document.getElementsByClassName("button")
let i = 0
let a1 = []
let c = 1
let str = ""
let m = 0
function texts(e) {
    e.target.textContent = c
    e.target.disabled = true
    c++
    if (c >= 26) {
        for (const e of a) {
            e.disabled = false
            e.removeEventListener("click", texts)
            e.addEventListener("click", () => {
                i++

                e.disabled = true
                e.style.background = "red"

                if (i >= 5) {
                    for (const e1 of pattern) {
                        let v1 = a[e1[0]].disabled

                        let v2 = a[e1[1]].disabled

                        let v3 = a[e1[2]].disabled

                        let v4 = a[e1[3]].disabled

                        let v5 = a[e1[4]].disabled

                        if (v1 == true && v2 == true && v3 == true && v4 == true && v5 == true) {
                            str += "win"
                            if (str.length == 15) {
                                // console.log("win 5 bingo stop")
                                // console.log(`CONGRATULATION ${player} WINS`)
                                alert(`CONGRATULATION ${player} WINS`)
                                location.reload()
                            }

                        }


                    }
                }

                str = ""


            })
        }
    }
}
for (const e of a) {
    e.addEventListener("click", texts)

}
