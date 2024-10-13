class ProductPage {
    get productTab() {
        return $('//a[@href="/products"]')
    }
    get addBtn() {
        return $('//a[@href="/products/create"]')
    }
    get namaProduct() {
        return $('#nama');
    }
    get deskripsiProduct() {
        return $('//input[@id="deskripsi"]');
    }
    get hargaBeli() {
        return $('//input[@id="harga beli"]'); 
    }
    get hargaJual() {
        return $('//input[@id="harga jual"]'); 
    }
    get stokProduct() {
        return $('#stok');
    }
    get kategoriProduct() {
        return $('#kategori'); 
    }
    get barang() {
        return $('//td[@class="css-u3dlpe"]')
    }
    get saveBtn() {
        return $('//button[@class="chakra-button css-l5lnz6"]');
    }
    get popupSuccess() {
        return $('//li[@class="chakra-toast"]');
    }
    get alertProduct() {
        return $('//div[@class="chakra-alert css-qwanz3"]')
    }

    async product() {
        await this.productTab.click()
    }
    async add() {
        await this.addBtn.click()
    }
    async save() {
        await this.saveBtn.click()
    }

    async kategori() {
        await this.kategoriProduct.click()
        await this.barang.click()
        await this.saveBtn.click()
    }

    async isiData(nama, deskripsi, hrgBeli, hrgJual, stok) {
        await this.namaProduct.setValue(nama);
        await this.deskripsiProduct.setValue(deskripsi);
        await this.hargaBeli.setValue(hrgBeli);
        await this.hargaJual.setValue(hrgJual);
        await this.stokProduct.setValue(stok);
    }
    async assertAlertMessage(expectedAlertMessage) {
        await expect(this.alertProduct).toHaveText(expectedAlertMessage);
      }
      async assertSuccessMessage(expectedSuccessMessage) {
        await expect(this.popupSuccess).toHaveText(expectedSuccessMessage);
      }
}
module.exports = new ProductPage();