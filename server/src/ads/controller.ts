import { JsonController, Get, HttpCode, Body, Post, Param, Put, NotFoundError } from 'routing-controllers'
import Ad from './entity';


@JsonController()
export default class AdController {

    @Post('/Ads')
    @HttpCode(201)
    createAd(
      @Body() ad: Ad
    ) {
       return ad.save()
    }

    @Get('/Ads/:id')
    getAd(
      @Param('id') id: number
    ) {
      return Ad.findOne(id)
    }

    @Get('/ads')
    async allAds() {
      const ads = await Ad.find()
      return { ads }
    }

    @Put('/Ads/:id')
    async updateAd(
      @Param('id') id: number,
      @Body() udpate: Partial<Ad>
    ) {
      const ad = await Ad.findOne(id)
      if (!ad) throw new NotFoundError('Ad not found')

      return Ad.merge(ad, udpate).save()
    }
}