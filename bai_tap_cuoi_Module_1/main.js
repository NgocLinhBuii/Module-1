class Product {
    constructor(name, price, quantity, imageUrl) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.imageUrl = imageUrl;
    }

    getName() {
        return this.name;
    }

    getPrice() {
        return this.price;
    }

    getQuantity() {
        return this.quantity;
    }

    getImageUrl() {
        return this.imageUrl;
    }

    setName(name) {
        this.name = name;
    }

    setPrice(price) {
        this.price = price;
    }

    setQuantity(quantity) {
        this.quantity = quantity;
    }

    setImageUrl(imageUrl) {
        this.imageUrl = imageUrl;
    }
}

let product = new Product("AKA-47", "1500$", "290", "data:image/jpeg;base64,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");
let product1 = new Product("M4A1", "1200$", "245", "https://media.istockphoto.com/id/97177244/vi/anh/s%C3%BAng-tr%C6%B0%E1%BB%9Dng-m4a1-c%E1%BB%A7a-l%E1%BB%A5c-qu%C3%A2n-hoa-k%E1%BB%B3.jpg?s=612x612&w=0&k=20&c=ovFtGeK7GbCGDEizji1J8M0QO7M6Evd_zOj4wDUhVws=")
let product2 = new Product("Uzi", "850$", "211", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNCD6pJCVtoEc4F2FZDntAPbKE1L0ZgyvYqW9lcS8VMQ&s");
let product3 = new Product("RPK", "1100$", "241", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLgJ9w0Zzlz3a1rBNu3z-i0X-wNlsOaSxkdnhvFTK78g&s");
let product4 = new Product("Xe tăng", "100000$", "221", "https://media.vov.vn/sites/default/files/styles/large/public/2023-01/xe%20tang%20My%20Abrams%20-twitter.jpg");

let productList = [product, product1, product2, product3, product4];
// let productList = [];
let editingIndex = null;
function displayProducts() {
    let str = "";
    for (let i = 0; i < productList.length; i++) {
        str += "<tr>";
        str += "<td>" + (i + 1) + "</td>";
        str += "<td><img src=\"" + productList[i].imageUrl + "\" alt=\"" + productList[i].name + "\" class=\"product-img\"></td>";
        str += "<td>" + productList[i].name + "</td>";
        str += "<td>" + productList[i].price + "</td>";
        str += "<td>" + productList[i].quantity + "</td>";
        str += "<td><button onclick=\"deleteProduct(" + i + ")\">Xóa</button></td>";
        str += "<td><button onclick=\"editProduct(this)\">Sửa</button></td>";
        str += "</tr>";
    }
    document.getElementById("table").innerHTML = str;
}

document.getElementById('productForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const productName = document.getElementById('productName').value;
    const productPrice = document.getElementById('productPrice').value;
    const productQuantity = document.getElementById('productQuantity').value;
    const productImage = document.getElementById('productImage').value;

    if (editingIndex === null) {
        const newProduct = new Product(productName, productPrice, productQuantity, productImage);
        productList.push(newProduct);
    } else {
        productList[editingIndex].name = productName;
        productList[editingIndex].price = productPrice;
        productList[editingIndex].quantity = productQuantity;
        productList[editingIndex].imageUrl = productImage;
        editingIndex = null;
        document.getElementById('submitButton').innerText = "Thêm Sản Phẩm";
        document.getElementById('updateButton').style.display = "none";
        document.getElementById('formTitle').innerText = "Thêm Sản Phẩm Mới";
    }

    displayProducts();
    document.getElementById('productForm').reset();
});


function deleteProduct(index) {
    let check = confirm("Bạn muốn xóa sản phẩm " + productList[index].getName() + " này?");
    if (check) {
        productList.splice(index, 1);
        displayProducts();
    }
}


function editProduct(button) {
    const row = button.parentElement.parentElement;
    const index = row.rowIndex - 1;
    let check = +prompt("Nhập thông tin mà bạn muốn sửa:\n 1. Ảnh \n 2. Tên \n 3. Giá \n 4. Số lượng");
    let img, name, price, quantity;

    switch (check) {
        case 1:
            img = prompt("URL ảnh mới");
            productList[index].setImageUrl(img);
            break;
        case 2:
            name = prompt("Nhập tên ");
            productList[index].setName(name);
            break;
        case 3:
            price = +prompt("Giá mới ");
            productList[index].setPrice(price);
            break;
        case 4:
            quantity = +prompt("Số lượng mới ");
            productList[index].setQuantity(quantity);
            break;
        default:
            alert("Bạn đã nhập sai, vui lòng nhập lại");
            break;
    }
    displayProducts();

}



displayProducts();


