<template>
  <div class="card text-center mt-4" v-for="f in friend" :key="f.id">
  <div class="card-header">Detail teman</div>
  <div class="card-body">
    <h5 class="card-title">{{ f.nama }}</h5>
    <p class="card-text">{{ f.no_tlpn }}</p>
    <p class="card-text">{{ f.alamat }}</p>
    <p class="card-text">{{ f.groups.name }}</p>

  </div>
  <div class="card-footer">
    <router-link class="btn btn-success" :to="{name:'Editfriends', params:{id:
            f.id}}" 
            >Edit</router-link
             >
        <button @click.prevent="friendDelete(f.id)" class="btn btn-danger">Delete</button>
  </div>
</div>
</template>

<script>
import { onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import axios from "axios";
export default {
  setup() {

      let friend = ref([]);
    const router = useRouter();

    const route = useRoute()

    onMounted(()=>{
      axios.get(`http://127.0.0.1:8000/api/friends/${route.params.id}`)
      .then(response => {
        console.log(response.data.data.nama);

        friend.value = response.data.data;
      })
      .catch((error) =>{
        console.log(error.response.data)
      });
    });

    function friendDelete(id){
      axios.delete(`http://127.0.0.1:8000/api/friends/${id}`)
      .then(()=>{
          router.go(-1)
      }).catch((error) => {
        console.log(error);
      });
    }
    return {
      friend,
      router, 
      friendDelete,
      route,
    };
  },
};
</script>

<style>

</style>