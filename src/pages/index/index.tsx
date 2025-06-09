import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import { Button } from '@nutui/nutui-react-taro'
import './index.scss'

export default function Index () {
  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='index'>
      <Text className='text-[#acc855] text-[100px]'>Hello world!</Text>
      <Button type='primary'>click me</Button>
    </View>
  )
}
