type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type ArrayType = { id: number } & Record<string, JSONValue>;

function join(arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] {
  // let res: ArrayType[] = [...arr1];
  // // for (var f = 0; f < arr1.length; f++) {
  // //   res.push(arr1[f]);
  // // }
  // for (var i = 0; i < arr2.length; i++) {
  //   let isExist = false;
  //   for (var j = 0; j < res.length; j++) {
  //     if (arr2[i].id === res[j].id) {
  //       isExist = true;
  //       res[j] = { ...res[j], ...arr2[i] };
  //       break;
  //     }
  //   }
  //   if (!isExist) res.push(arr2[i]);
  // }
  // return res;
  // 上面代码能完成效果，但是用例38超出时间限制
  // 创建一个以 id 为键的对象来存储结果
  const map: Record<number, ArrayType> = {};

  // 将 arr1 的元素加入 map
  for (const item of arr1) {
    map[item.id] = { ...item };
  }

  // 遍历 arr2，合并或添加元素
  for (const item of arr2) {
    if (map[item.id]) {
      // 如果 id 已存在，则合并属性
      map[item.id] = { ...map[item.id], ...item };
    } else {
      // 如果 id 不存在，则直接添加
      map[item.id] = { ...item };
    }
  }

  // 将 map 转换回数组并按 id 排序
  return Object.values(map).sort((a, b) => a.id - b.id);
}
