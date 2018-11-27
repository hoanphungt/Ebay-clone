import { JsonController, Get, HttpCode, Body, Post, Param, Put, NotFoundError, Delete } from 'routing-controllers'
import Ad from './entity';


@JsonController()
export default class AdController {

    @Post('/ads')
    @HttpCode(201)
    createAd(
      @Body() ad: Ad
    ) {
       return ad.save()
    }

    @Get('/ads/:id')
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

    @Put('/ads/:id')
    async updateAd(
      @Param('id') id: number,
      @Body() udpate: Partial<Ad>
    ) {
      const ad = await Ad.findOne(id)
      if (!ad) throw new NotFoundError('Ad not found')

      return Ad.merge(ad, udpate).save()
    }

    @Delete('/ads/:id')
    async deleteAd(
      @Param('id') id: number
    ) {
      const ad = await Ad.findOne(id)
      if (!ad) {
        throw new NotFoundError('Ad not found')
      } else {
        const adIsDeleted = Ad.delete(ad)
        if (adIsDeleted) {
          return {message: 'ad has been deleted succesfully'}
        }
      }

      return Ad.delete(id)
    }
}