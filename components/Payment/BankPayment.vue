<template>
    <div class="container">
        <div class="form-check">
          <label class="form-check-label">
            <input type="checkbox" class="form-check-input"
                id="checkbox"
                name="bank"
                v-model="selected"
                :options="options">
            
          </label>
        </div>
        <button class="btn btn-success" type="submit"> Konfirmasi </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selected: [],
            options: [
                { text: "Bank BCA", value: 'bca'},
                { text: "Bank BNI", value: 'bni'},
                { text: "Bank Mandiri", value: 'mandiri'},
                { text: "Bank BRI", value: 'bri'},
                { text: "Bank CIMB", value: 'cimb'},
            ]
        }
    }

}
</script>