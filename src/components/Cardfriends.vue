<template>
<div class="row">
  <div class="col-lg-4 mt-3" v-for="(friend, index) in friends" :key="index">
      <div class="card">
  <div class="card-header">{{friend.nama}}</div>
  <div class="card-body">
    <h5 class="card-title">{{friend.no_tlpn}}</h5>
    <p class="card-text">{{friend.alamat}}</p>
    <p class="card-text">{{friend.groups.name}}</p>
  </div>
  <div class="card-footer text-muted"> <router-link 
  class="btn btn-primary" 
  :to="{name:'Detailfriends', params:{id:
            friend.id}}" 
            >Detail</router-link
             >
</div>
</div>
</div>
</div>
</template>

<script>
export default {
props: ["friends"],
};
</script>

<style>

</style>