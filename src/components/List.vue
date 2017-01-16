<template>
    <div>
        <div v-if="statusCode  == null">

        </div>
        <div v-else-if="statusCode == 200 ">
            <table width="100%">
                <thead>
                    <th>Repository name</th>
                    <th>Stars</th>
                    <th>Open issues</th>
                </thead>
                <tbody>
                    <tr v-for="item in response.items">
                        <td>{{ item.name }}</td>
                        <td>{{ item.stargazers_count }}</td>
                        <td>{{ item.open_issues }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div v-else>
          Something went wrong: {{ statusCode }}
        </div>
    </div>
</template>
<script>
    export default {
      name: 'list',
      props: ['response'],
      computed: {
        statusCode () {
          return this.response.statusCode
        }
      }
    }
</script>
<style>
</style>