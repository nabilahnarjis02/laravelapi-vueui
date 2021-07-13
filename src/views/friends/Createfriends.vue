<template>
<div class="card shadow mt-3">
  <div class="card-body">
    <h5 class="card-title">Add Friend</h5>
     <form class="row g-3" @submit.prevent="store">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Nama</label>
    <input type="text" class="form-control" id="inputEmail4" 
    v-model="friend.nama" />
      <div class="alert alert-danger" v-if="validation.nama">
        {{ validation.nama[0] }}
      </div>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">No Tlp</label>
    <input type="number" class="form-control" id="inputPassword4"
    v-model="friend.no_tlpn"/>
    <div class="alert alert-danger" v-if="validation.no_tlpn">
        {{ validation.no_tlpn[0] }}
      </div>
  </div>
  <div class="col-6">
    <label for="inputAddress" class="form-label">Alamat</label>
    <input type="text" class="form-control" id="inputAddress" 
    v-model="friend.alamat" />
    <div class="alert alert-danger" v-if="validation.alamat">
        {{ validation.alamat[0] }}
      </div>
  </div>
  <div class="col-6">
    <label for="inputAddress" class="form-label">Group</label>
  <select class="form-select" aria-label="Default select example" v-model="friend.groups_id"> 
  <option v-for="group in groups" :key="group.id" value="group.id">{{ group.name }}
  </option>

</select>
</div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Add</button>
  </div>
</form>
  </div>
</div>
</template>
<script>
import { reactive,ref,onMounted } from "vue";
import { useRouter } from "vue-router"
import axios from "axios"
export default {
  setup() {

    const friend = reactive({
      nama: "",
      no_tlpn: "",
      alamat: "",
      groups_id:""
    });
    let groups = ref([]);
    const validation = ref([]);

    const router = useRouter();

    onMounted(() => {
      axios
      .get("http://127.0.0.1:8000/api/groups")
      .then((response) => {
        groups.value = response.data.data;
        console.log(groups.value);
      })
      .catch(error => {
        console.log(error);
      });
  });

    function store(){
      let nama = friend.nama;
      let no_tlpn = friend.no_tlpn;
      let alamat = friend.alamat;
      let groups_id = friend.groups_id;

      axios
      .post("http://127.0.0.1:8000/api/friends/", {
        nama: nama,
        no_tlpn: no_tlpn,
        alamat: alamat,
        groups_id: groups_id
      })
      .then(() => {
        router.push({
          name:"Home"
        });
      })
      .catch(error => {
        validation.value = error.response.data
      });
    }
    return {
      friend,
      validation,
      router, 
      store,
      groups,
    };
  },
};
</script>