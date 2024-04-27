<script lang="ts" setup>
import ProfileImage from "@/components/common/ProfileImage.vue";

const props = defineProps<{
  commentList: Comment[];
  loginUser: User;
  deleteComment: (id: CommentId) => void;
}>();
</script>

<template>
  <div>
    <div v-for="comment in commentList" :key="comment.id" class="card">
      <div class="card-block">
        <p class="card-text">{{ comment.body }}</p>
      </div>
      <div class="card-footer">
        <NuxtLink
          :to="`/profile/${comment.author.username}`"
          class="comment-author"
        >
          <ProfileImage
            :url="comment.author.image"
            :class-name="'comment-author-img'"
            :alt="'author profile image'"
          />
        </NuxtLink>
        <NuxtLink
          :to="`/profile/${comment.author.username}`"
          class="comment-author"
        >
          {{ comment.author.username }}
        </NuxtLink>
        <span class="date-posted">{{
          new Date(comment.createdAt).toDateString()
        }}</span>
        <span class="mod-options">
          <i
            v-if="loginUser.username === comment.author.username"
            class="ion-trash-a"
            @click="() => props.deleteComment(comment.id)"
          />
        </span>
      </div>
    </div>
  </div>
</template>
