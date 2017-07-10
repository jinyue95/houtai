/**
 * Created by Administrator on 2017/4/25.
 */

angular.module('app')
    .config(function($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise('second');
        $stateProvider
            .state({
                name:"first",
                url:"/first",
                templateUrl:"html/first.html"
            })
            .state({
                name:"second",
                url:"/second",
                templateUrl:"html/second.html",
                controller:function($scope){
                    $scope.fun = function(){
                        var tests = $('.teea').val();
                        var date = new Date();
                        $('<p>'+ tests+'<span>'+ date.getFullYear()+'年'+(date.getMonth()+1)+'月'+date.getDate()+'日'+'<b>回复</b></span></p>'
                        ).appendTo($('.datas'));

                    }
                }
            })
            .state({
                name:"third",
                url:"/third",
                templateUrl:"html/third.html"
            })
            .state({
                name:"fourth",
                url:"/fourth",
                templateUrl:"html/fourth.html"
            })

    });

angular.module('app')
    .directive('inputFile',function () {
        return {
            template:'<div class="input-file">'+
            '<label for="{{inputId}}"></label>'+
            '<input type="file" id="{{inputId}}">'+
            '</div>',
            restrict:'E',
            scope:{},
            controller:function ($scope) {
                $scope.inputId = 'inputFile'+$scope.$id
            },
            link:function (scope,ele) {
                var inputFile = ele.find('div');
                var input = $(inputFile).find('input');
                input.on('change',function () {
                    var reader = new FileReader();

                    reader.readAsDataURL(this.files[0]);

                    reader.onload = function () {
                        console.log($(inputFile).find('label'));
                        $(inputFile).find('label')[0].style.background = 'url('+this.result+') no-repeat center center'

                    }
                })
            }
        }
    });

$('.updown li').on('click',function(){
    $(this).children('a').attr('class','down-down').end().siblings().children('a').attr('class','up-up')
})


