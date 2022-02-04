<script lang="ts">
import { ref, onMounted } from 'vue'
import Letterize from 'letterizejs'

function splitAndWrapWords(el: Element): void
{
  if (el.textContent === null) return
  if (el.childElementCount !== 0) {
    Array.from(el.children).map(splitAndWrapWords)
    return
  }

  el.innerHTML = el.textContent.split(/\s+/).reduce((acc, word) => {
      if (!word) return acc

    return acc + '<span data-word>' + word + '</span>'
  }, '')

  // const treeWalker = document.createTreeWalker(
  //   el,
  //   NodeFilter.SHOW_TEXT
  // );

  // const nodeList = [];
  // let currentNode: Node | null = treeWalker.currentNode;

  // while(currentNode) {
  //   nodeList.push(currentNode);
  //   currentNode = treeWalker.nextNode();
  // }

  // console.log(nodeList)
  // nodeList.map( n => {
  //   if (n.parentElement === null) return

  //   const wrap = document.createElement('span')
  //   wrap.setAttribute('data-word', '')
  //   wrap.textContent = n.textContent

  //   console.log(wrap.textContent)

  //   n.parentElement.insertBefore(wrap, n)
  //   n.textContent = ''
  // })
}

function wordizeLetterize(el: Element | null): Letterize | null
{
  if (el === null) return null
  
  splitAndWrapWords(el)
  // const l = new Letterize({
  //   targets: el.querySelectorAll('[data-word]')
  // })

  return null
}

export default {
  setup() {
    const root = ref(null)

    onMounted(() => {
      wordizeLetterize(root.value)
      console.log(root.value)
    })

    return {
      root
    }
  }
}

</script>

<template>
<span ref="root">
  <slot></slot>
</span>
</template>