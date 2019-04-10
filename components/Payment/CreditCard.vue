<template>
    <div class="row">
        <form action="#" class="form" method="post" @submit="onSubmit">
            <div class="form-group">
                <label for="nama">Nama Pemilik Kartu</label>
                <input v-model="formcc.namaKartu" type="text" class="form-control" placeholder="" required="">           
            </div>
            <div class="form-group">
                <label for="nomorKartu">Nomor Kartu</label>
                <div class="input-group">
                    <input v-model="formcc.nomorKartu" type="text" class="form-control" placeholder="">
                    <div class="input-group-append">
                        <span class="input-group-text text-muted">
                            <font-awesome-icon icon="credit-card"/>
                        </span>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-8">
                    <div class="form-group">
                        <label><span class="hidden-xs">Kadaluarsa pada:</span> </label>
                        <div class="input-group">
                            <input v-model="formcc.mm" type="text" class="form-control" placeholder="MM" name="">
                            <input v-model="formcc.yy" type="text" class="form-control" placeholder="YY" name="">
                        </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="form-group">
                        <label data-toggle="tooltip" title="" data-original-title="3 digits code on back side of the card">CVV </label>
                        <input v-model="formcc.cvv" type="text" class="form-control" required>
                    </div>
                </div>
            </div>
            <button class="subscribe btn btn-success btn-block" type="button"> Konfirmasi </button>
        </form>   
    </div>
</template>

<script>
export default {
    props: {
        namaKartu: {
            type: String,
            required: true
        },
        nomorKartu: {
            type: String,
            required: true
        },
        mm: {
            type: String,
            required: true
        },
        yy: {
            type: String,
            required: true
        },
        cvv: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            formcc: {
                namaKartu: "",
                nomorKartu: "",
                mm: "",
                yy: "",
                cvv: ""
            }
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