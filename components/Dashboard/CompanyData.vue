<template>
    <div class="row mt-3">
        <form action="#" class="form" method="post" @submit="onSubmit">
            <div class="form-group">
                <label for="nama-pt">Nama Perusahaan</label>
                <input v-model="form.name" type="text" class="form-control" readonly>
            </div>
            <div class="form-group">
                <label for="email-pt">Alamat Email</label>
                <input v-model="form.email" type="text" class="form-control" readonly>
            </div>
            <div class="form-group">
                <label for="bidang-industri">Bidang Industri</label>
                <input v-model="form.industri" type="text" class="form-control" placeholder="Bidang Industri">
            </div>
            <div class="form-group">
                <label for="phone-number">Nomor Telepon</label>
                <input v-model="form.phone" type="text" class="form-control" placeholder="Nomor Telepon">
            </div>
            <h6>Alamat Pengiriman</h6>
            <div class="form-row">
                <div class="form-group col-md-4">
                    <label for="provinsi">Provinsi</label>
                    <select :options="provinsi" v-model="form.provinsi" id="inputProvinsi" class="form-control">
                        <option value="" hidden>Pilih Provinsi...</option>
                        <option v-for="provinsi in allprovinsi" :value="provinsi.id">{{ provinsi.label }}</option>
                    </select>
                </div>
                <div class="form-group col-md-4">
                    <label for="kota-kabupaten">Kota/Kabupaten</label>
                    <select :options="kota" v-model="form.kota" id="inputKota" class="form-control">
                        <option value="" hidden>Pilih Kota/Kabupaten...</option>
                        <option v-for="kota in allkota" :value="kota.id">{{ kota.label }}</option>
                    </select>
                </div>
                <div class="form-group col-md-4">
                    <label for="kecamatan">Kecamatan</label>
                    <select :options="allkecamatan" v-model="form.kecamatan" id="inputKecamatan" class="form-control">
                        <option value="" hidden>Pilih Kecamatan...</option>
                        <option v-for="kecamatan in allkecamatan" :value="kecamatan.id">{{ kecamatan.label }}</option>
                    </select>
                </div> 
                <div class="form-group col-md-12">
                    <label for="Alamat">Alamat Lengkap</label>
                    <textarea v-model="form.alamat" class="form-control" id="alamatLengkap" rows="3"></textarea>
                </div>
            </div>
            <div class="form-group">
                <label>Lampirkan Surat Izin Usaha (.pdf)</label>
                <input :v-model="form.file" accept=".pdf" type="file" class="form-control-file">
            </div>
            <div class="form-group">
                <br>
                <button class="btn btn-md btn-success" type="submit">Simpan</button>    
            </div>
        </form>   
    </div>
</template>

<script>
export default {
    props: {
        name: {
           type: String,
           required: true
        },
        email: {
           type: String,
           required: true 
        },
        industri: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        provinsi: {
            type: String,
           required: true
        },
        kota: {
            type: String,
           required: true
        },
        kecamatan: {
            type: String,
           required: true
        },




    },
    data() {
        return {
            form: {
                name: "PT Nama Perusahaan",
                email: "nama@perusahaan.com",
                industri: "",
                phone: "",
                provinsi: "",
                kota: "",
                kecamatan: "",
                alamat: '',
                file: ""
            },
            allprovinsi: [{label: "Banten", id: "1"}, {label: "DKI Jakarta", id: "2"}, {label: "Jawa Barat", id: "3"}],
            allkota: [{label: "Jakarta Barat", id:"1"}, {label: "Jakarta Pusat", id: "2"}, {label: "Jakarta Selatan", id: "3"}, {label: "Jakarta Timur", id: "4"}, {label: "Jakarta Utara", id: "5"}, {label: "Bogor", id: "6"}, {label: "Depok", id: "7"}, {label: "Bekasi", id: "8"}],
            allkecamatan: [{label: "Tebet", id: "1"}, {label: "Pasar Minggu", id: "2"}, {label: "Beji", id: "3"}, {label: "Tanah Abang", id: "4"}]
        }
    },
    methods: {
        onSubmit(evt) {
            evt.preventDefault()
            alert(JSON.stringify(this.form))
        }
    }
}
</script>

<style>
.custom-file-input:lang(en) ~ .custom-file-label::after {
  content: 'Cari';
} 
</style>