//Package models 模型错误
package models

import "errors"

// ErrorWrong 程序员不该有的错误
var ErrorWrong error = errors.New("程序员的眼泪")

// ErrorNotFind 找不到的错误
var ErrorNotFind error = errors.New("查询不到信息")

// ErrorUpdate 更新失败
var ErrorUpdate error = errors.New("更新失败")
