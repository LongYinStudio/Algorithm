#!/bin/bash

awk '
{
  for (i = 1; i <= NF; i++) {
    if (NR == 1) {
      reverse[i] = $i
    } else {
      reverse[i] = reverse[i] " " $i 
    }
  }
}
END{
  for (i = 1; i <= length(reverse); i++){
    print reverse[i]
  }
}' ./194.file.txt
