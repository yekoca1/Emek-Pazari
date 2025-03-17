const textClip = (text: string) => {
    if  (text.length < 20) return text
    return text.substring(0,20) +".." //text 20den uzunsa ilk 20 hardini döndür

}

export default textClip