// định dạng tiền VNĐ
const VND = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
});



// Prototype Nhân Viên
function NhanVien() {
  this.taiKhoan = "";
  this.hoTen = "";
  this.email = "";
  this.ngayLam = "";
  this.password = "";
  this.luong = 0;
  this.heSoLuong = 0;
  this.chucVu = "";
  this.valueChucVu = 0;
  this.gioLam = 0;

  // tính tổng lương
  this.tongLuong = () => {
    if (this.heSoLuong === 2) return VND.format(this.luong * 3);
    if (this.heSoLuong === 3) return VND.format(this.luong * 2);
    if (this.heSoLuong === 4) return VND.format(this.luong);
  };

  //xếp loại
  this.xepLoai = () => {
    if (this.gioLam >= 192) return (htmlString = `Xuất Sắc`);
    if (this.gioLam >= 176) return (htmlString = `Giỏi`);
    if (this.gioLam >= 160) return (htmlString = `Khá`);
    if (this.gioLam < 160) return (htmlString = `Trung Bình`);
  };
}

