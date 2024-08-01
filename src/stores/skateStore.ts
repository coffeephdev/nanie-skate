import { defineStore } from 'pinia'
import { SkateChoices } from "@/types/SkateChoices";
import witcherMinia from "@/assets/board/witcher/minia.jpg";
import witcher01 from "@/assets/board/witcher/01.jpg";
import witcher02 from "@/assets/board/witcher/02.jpg";
import witcher03 from "@/assets/board/witcher/03.jpg";
import rdrMinia from "@/assets/board/red-dead/minia.jpg";
import rdr01 from "@/assets/board/red-dead/01.jpg";
import rdr02 from "@/assets/board/red-dead/02.jpg";
import rdr03 from "@/assets/board/red-dead/03.jpg";
import type { SkateInfos } from "@/types/SkateInfos";

export const useSkateStore = defineStore('skateStore', {
  state: () => ({
    skateChoice: null as SkateChoices | null,
    showGallery: false as boolean,
    skateInfos: [
      {
        label: "The Witcher III",
        miniaturePath: witcherMinia,
        skateChoice: SkateChoices.Witcher,
        imagesPath: [witcher01, witcher02, witcher03]
      },
      {
        label: "Red Dead Redemption 2",
        miniaturePath: rdrMinia,
        skateChoice: SkateChoices.RedDead,
        imagesPath: [rdr01, rdr02, rdr03]
      }
    ] as SkateInfos[]
  }),
  getters: {
    getImagesPath(state) {
      if (state.skateChoice == null) return []
      return state.skateInfos.find(info => info.skateChoice == state.skateChoice)?.imagesPath
    },
    getLabel(state) {
      if (state.skateChoice == null) return []
      return state.skateInfos.find(info => info.skateChoice == state.skateChoice)?.label
    },
  },
  actions: {
    resetGallery() {
      this.showGallery = false
      this.skateChoice = null
    }
  },
})