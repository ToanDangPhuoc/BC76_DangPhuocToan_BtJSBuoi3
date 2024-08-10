// bài 1
let Luong = 100000;
document.querySelector(".bai1").onclick = function () {
  ngayLamViec = document.getElementById("ngayLam").value * 1;
  let luongThangNay = Luong * ngayLamViec;
  console.log(luongThangNay);
  let luongThang = luongThangNay.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  document.querySelector(
    ".ketQua_bai1"
  ).innerHTML = `Tiền lương tháng này là : ${luongThang}`;
};
// bài 2
document.querySelector(".bai2").onclick = function () {
  let so1 = document.getElementById("so1").value * 1;
  let so2 = document.getElementById("so2").value * 1;
  let so3 = document.getElementById("so3").value * 1;
  let so4 = document.getElementById("so4").value * 1;
  let so5 = document.getElementById("so5").value * 1;
  let trungBinh = (so1 + so2 + so3 + so4 + so5) / 5;
  document.querySelector(
    ".ketQua_bai2"
  ).innerHTML = `Giá trị trung bình của 5 số là : ${trungBinh}`;
};
// bài 3
let giaDo = 23500;
document.querySelector(".bai3").onclick = function () {
  console.log("bi click");
  let tienDoi = document.getElementById("soTien").value * 1;
  let tienNhanDuoc = giaDo * tienDoi;
  let doiDo = tienNhanDuoc.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  document.querySelector(
    ".ketQua_bai3"
  ).innerHTML = `Số tiền nhận được là : ${doiDo}`;
};
// Bài 4
document.querySelector(".bai4").onclick = function () {
  let chieuDai = document.getElementById("chieuDai").value * 1;
  let chieRong = document.getElementById("chieuRong").value * 1;
  let chuVi = (chieRong + chieuDai) * 2;
  let dienTich = chieRong * chieuDai;
  document.querySelector(".ketQua_chuVi").innerHTML = `Chu vi là ${chuVi}`;
  document.querySelector(
    ".ketQua_dienTich"
  ).innerHTML = `Diện tích là ${dienTich}`;
};
// Bài 5
function hangDonVi(so) {
  return so % 10;
}
function hangChuc(so) {
  return Math.floor(so / 10);
}
document.querySelector(".bai5").onclick = function () {
  let soDienVao = document.getElementById("kySo").value * 1;

  let tongSoDienVao = hangDonVi(soDienVao) + hangChuc(soDienVao);
  document.querySelector(
    ".ketQua_bai5"
  ).innerHTML = `Tổng 2 ký số của bạn là ${tongSoDienVao}`;
};
