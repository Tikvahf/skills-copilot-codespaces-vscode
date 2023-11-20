function skillsMember(){
    return {
        restrict: 'E',
        templateUrl: 'module/skills/views/member.html',
        controller: 'vn',
        bindToController: 'true',
        scope: {
            member: 'm'
        }
    }
}