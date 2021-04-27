var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i5490 = root || request.c( 'UnityEngine.JointSpring' )
  var i5491 = data
  i5490.spring = i5491[0]
  i5490.damper = i5491[1]
  i5490.targetPosition = i5491[2]
  return i5490
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i5492 = root || request.c( 'UnityEngine.JointMotor' )
  var i5493 = data
  i5492.m_TargetVelocity = i5493[0]
  i5492.m_Force = i5493[1]
  i5492.m_FreeSpin = i5493[2]
  return i5492
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i5494 = root || request.c( 'UnityEngine.JointLimits' )
  var i5495 = data
  i5494.m_Min = i5495[0]
  i5494.m_Max = i5495[1]
  i5494.m_Bounciness = i5495[2]
  i5494.m_BounceMinVelocity = i5495[3]
  i5494.m_ContactDistance = i5495[4]
  i5494.minBounce = i5495[5]
  i5494.maxBounce = i5495[6]
  return i5494
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i5496 = root || request.c( 'UnityEngine.JointDrive' )
  var i5497 = data
  i5496.m_PositionSpring = i5497[0]
  i5496.m_PositionDamper = i5497[1]
  i5496.m_MaximumForce = i5497[2]
  return i5496
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i5498 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i5499 = data
  i5498.m_Spring = i5499[0]
  i5498.m_Damper = i5499[1]
  return i5498
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i5500 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i5501 = data
  i5500.m_Limit = i5501[0]
  i5500.m_Bounciness = i5501[1]
  i5500.m_ContactDistance = i5501[2]
  return i5500
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i5502 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i5503 = data
  i5502.m_ExtremumSlip = i5503[0]
  i5502.m_ExtremumValue = i5503[1]
  i5502.m_AsymptoteSlip = i5503[2]
  i5502.m_AsymptoteValue = i5503[3]
  i5502.m_Stiffness = i5503[4]
  return i5502
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i5504 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i5505 = data
  i5504.m_LowerAngle = i5505[0]
  i5504.m_UpperAngle = i5505[1]
  return i5504
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i5506 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i5507 = data
  i5506.m_MotorSpeed = i5507[0]
  i5506.m_MaximumMotorTorque = i5507[1]
  return i5506
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i5508 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i5509 = data
  i5508.m_DampingRatio = i5509[0]
  i5508.m_Frequency = i5509[1]
  i5508.m_Angle = i5509[2]
  return i5508
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i5510 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i5511 = data
  i5510.m_LowerTranslation = i5511[0]
  i5510.m_UpperTranslation = i5511[1]
  return i5510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i5512 = root || new pc.UnityMaterial()
  var i5513 = data
  i5512.name = i5513[0]
  request.r(i5513[1], i5513[2], 0, i5512, 'shader')
  i5512.renderQueue = i5513[3]
  i5512.enableInstancing = !!i5513[4]
  var i5515 = i5513[5]
  var i5514 = []
  for(var i = 0; i < i5515.length; i += 1) {
    i5514.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i5515[i + 0]) );
  }
  i5512.floatParameters = i5514
  var i5517 = i5513[6]
  var i5516 = []
  for(var i = 0; i < i5517.length; i += 1) {
    i5516.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i5517[i + 0]) );
  }
  i5512.colorParameters = i5516
  var i5519 = i5513[7]
  var i5518 = []
  for(var i = 0; i < i5519.length; i += 1) {
    i5518.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i5519[i + 0]) );
  }
  i5512.vectorParameters = i5518
  var i5521 = i5513[8]
  var i5520 = []
  for(var i = 0; i < i5521.length; i += 1) {
    i5520.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i5521[i + 0]) );
  }
  i5512.textureParameters = i5520
  var i5523 = i5513[9]
  var i5522 = []
  for(var i = 0; i < i5523.length; i += 1) {
    i5522.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i5523[i + 0]) );
  }
  i5512.materialFlags = i5522
  return i5512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i5526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i5527 = data
  i5526.name = i5527[0]
  i5526.value = i5527[1]
  return i5526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i5530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i5531 = data
  i5530.name = i5531[0]
  i5530.value = new pc.Color(i5531[1], i5531[2], i5531[3], i5531[4])
  return i5530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i5534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i5535 = data
  i5534.name = i5535[0]
  i5534.value = new pc.Vec4( i5535[1], i5535[2], i5535[3], i5535[4] )
  return i5534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i5538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i5539 = data
  i5538.name = i5539[0]
  request.r(i5539[1], i5539[2], 0, i5538, 'value')
  return i5538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i5542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i5543 = data
  i5542.name = i5543[0]
  i5542.enabled = !!i5543[1]
  return i5542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i5544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i5545 = data
  i5544.position = new pc.Vec3( i5545[0], i5545[1], i5545[2] )
  i5544.scale = new pc.Vec3( i5545[3], i5545[4], i5545[5] )
  i5544.rotation = new pc.Quat(i5545[6], i5545[7], i5545[8], i5545[9])
  return i5544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i5546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i5547 = data
  i5546.enabled = !!i5547[0]
  i5546.isTrigger = !!i5547[1]
  request.r(i5547[2], i5547[3], 0, i5546, 'material')
  i5546.center = new pc.Vec3( i5547[4], i5547[5], i5547[6] )
  i5546.radius = i5547[7]
  return i5546
}

Deserializers["UnselectedColliderDrawer"] = function (request, data, root) {
  var i5548 = root || request.c( 'UnselectedColliderDrawer' )
  var i5549 = data
  return i5548
}

Deserializers["WheatPieceDestroyer"] = function (request, data, root) {
  var i5550 = root || request.c( 'WheatPieceDestroyer' )
  var i5551 = data
  return i5550
}

Deserializers["WheatPieceRandomizer"] = function (request, data, root) {
  var i5552 = root || request.c( 'WheatPieceRandomizer' )
  var i5553 = data
  request.r(i5553[0], i5553[1], 0, i5552, 'partsParent')
  return i5552
}

Deserializers["DisableIfTooFar"] = function (request, data, root) {
  var i5554 = root || request.c( 'DisableIfTooFar' )
  var i5555 = data
  return i5554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i5556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i5557 = data
  request.r(i5557[0], i5557[1], 0, i5556, 'sharedMesh')
  return i5556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i5558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i5559 = data
  request.r(i5559[0], i5559[1], 0, i5558, 'additionalVertexStreams')
  i5558.enabled = !!i5559[2]
  request.r(i5559[3], i5559[4], 0, i5558, 'sharedMaterial')
  var i5561 = i5559[5]
  var i5560 = []
  for(var i = 0; i < i5561.length; i += 2) {
  request.r(i5561[i + 0], i5561[i + 1], 2, i5560, '')
  }
  i5558.sharedMaterials = i5560
  i5558.receiveShadows = !!i5559[6]
  i5558.shadowCastingMode = i5559[7]
  i5558.sortingLayerID = i5559[8]
  i5558.sortingOrder = i5559[9]
  i5558.lightmapIndex = i5559[10]
  i5558.lightmapSceneIndex = i5559[11]
  i5558.lightmapScaleOffset = new pc.Vec4( i5559[12], i5559[13], i5559[14], i5559[15] )
  i5558.lightProbeUsage = i5559[16]
  i5558.reflectionProbeUsage = i5559[17]
  return i5558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i5564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i5565 = data
  i5564.name = i5565[0]
  i5564.tag = i5565[1]
  i5564.enabled = !!i5565[2]
  i5564.isStatic = !!i5565[3]
  i5564.layer = i5565[4]
  return i5564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i5566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i5567 = data
  i5566.name = i5567[0]
  i5566.halfPrecision = !!i5567[1]
  i5566.vertexCount = i5567[2]
  i5566.aabb = i5567[3]
  var i5569 = i5567[4]
  var i5568 = []
  for(var i = 0; i < i5569.length; i += 1) {
    i5568.push( !!i5569[i + 0] );
  }
  i5566.streams = i5568
  i5566.vertices = i5567[5]
  var i5571 = i5567[6]
  var i5570 = []
  for(var i = 0; i < i5571.length; i += 1) {
    i5570.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i5571[i + 0]) );
  }
  i5566.subMeshes = i5570
  var i5573 = i5567[7]
  var i5572 = []
  for(var i = 0; i < i5573.length; i += 16) {
    i5572.push( new pc.Mat4().setData(i5573[i + 0], i5573[i + 1], i5573[i + 2], i5573[i + 3],  i5573[i + 4], i5573[i + 5], i5573[i + 6], i5573[i + 7],  i5573[i + 8], i5573[i + 9], i5573[i + 10], i5573[i + 11],  i5573[i + 12], i5573[i + 13], i5573[i + 14], i5573[i + 15]) );
  }
  i5566.bindposes = i5572
  var i5575 = i5567[8]
  var i5574 = []
  for(var i = 0; i < i5575.length; i += 1) {
    i5574.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i5575[i + 0]) );
  }
  i5566.blendShapes = i5574
  return i5566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i5580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i5581 = data
  i5580.triangles = i5581[0]
  return i5580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i5586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i5587 = data
  i5586.name = i5587[0]
  var i5589 = i5587[1]
  var i5588 = []
  for(var i = 0; i < i5589.length; i += 1) {
    i5588.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i5589[i + 0]) );
  }
  i5586.frames = i5588
  return i5586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i5590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i5591 = data
  i5590.name = i5591[0]
  i5590.width = i5591[1]
  i5590.height = i5591[2]
  i5590.mipmapCount = i5591[3]
  i5590.anisoLevel = i5591[4]
  i5590.filterMode = i5591[5]
  i5590.hdr = !!i5591[6]
  i5590.format = i5591[7]
  i5590.wrapMode = i5591[8]
  i5590.alphaIsTransparency = !!i5591[9]
  i5590.alphaSource = i5591[10]
  return i5590
}

Deserializers["DamagingObstacle"] = function (request, data, root) {
  var i5592 = root || request.c( 'DamagingObstacle' )
  var i5593 = data
  request.r(i5593[0], i5593[1], 0, i5592, 'parts')
  i5592.m_damage = i5593[2]
  return i5592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i5594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i5595 = data
  i5594.enabled = !!i5595[0]
  request.r(i5595[1], i5595[2], 0, i5594, 'sharedMaterial')
  var i5597 = i5595[3]
  var i5596 = []
  for(var i = 0; i < i5597.length; i += 2) {
  request.r(i5597[i + 0], i5597[i + 1], 2, i5596, '')
  }
  i5594.sharedMaterials = i5596
  i5594.receiveShadows = !!i5595[4]
  i5594.shadowCastingMode = i5595[5]
  i5594.sortingLayerID = i5595[6]
  i5594.sortingOrder = i5595[7]
  i5594.lightmapIndex = i5595[8]
  i5594.lightmapSceneIndex = i5595[9]
  i5594.lightmapScaleOffset = new pc.Vec4( i5595[10], i5595[11], i5595[12], i5595[13] )
  i5594.lightProbeUsage = i5595[14]
  i5594.reflectionProbeUsage = i5595[15]
  request.r(i5595[16], i5595[17], 0, i5594, 'mesh')
  i5594.meshCount = i5595[18]
  i5594.activeVertexStreamsCount = i5595[19]
  i5594.alignment = i5595[20]
  i5594.renderMode = i5595[21]
  i5594.sortMode = i5595[22]
  i5594.lengthScale = i5595[23]
  i5594.velocityScale = i5595[24]
  i5594.cameraVelocityScale = i5595[25]
  i5594.normalDirection = i5595[26]
  i5594.sortingFudge = i5595[27]
  i5594.minParticleSize = i5595[28]
  i5594.maxParticleSize = i5595[29]
  i5594.pivot = new pc.Vec3( i5595[30], i5595[31], i5595[32] )
  request.r(i5595[33], i5595[34], 0, i5594, 'trailMaterial')
  return i5594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i5598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i5599 = data
  i5598.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i5599[0], i5598.main)
  i5598.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i5599[1], i5598.colorBySpeed)
  i5598.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i5599[2], i5598.colorOverLifetime)
  i5598.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i5599[3], i5598.emission)
  i5598.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i5599[4], i5598.rotationBySpeed)
  i5598.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i5599[5], i5598.rotationOverLifetime)
  i5598.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i5599[6], i5598.shape)
  i5598.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i5599[7], i5598.sizeBySpeed)
  i5598.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i5599[8], i5598.sizeOverLifetime)
  i5598.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i5599[9], i5598.textureSheetAnimation)
  i5598.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i5599[10], i5598.velocityOverLifetime)
  i5598.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i5599[11], i5598.noise)
  i5598.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i5599[12], i5598.inheritVelocity)
  i5598.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i5599[13], i5598.forceOverLifetime)
  i5598.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i5599[14], i5598.limitVelocityOverLifetime)
  i5598.useAutoRandomSeed = !!i5599[15]
  i5598.randomSeed = i5599[16]
  return i5598
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i5600 = root || new pc.ParticleSystemMain()
  var i5601 = data
  i5600.duration = i5601[0]
  i5600.loop = !!i5601[1]
  i5600.prewarm = !!i5601[2]
  i5600.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5601[3], i5600.startDelay)
  i5600.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5601[4], i5600.startLifetime)
  i5600.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5601[5], i5600.startSpeed)
  i5600.startSize3D = !!i5601[6]
  i5600.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5601[7], i5600.startSizeX)
  i5600.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5601[8], i5600.startSizeY)
  i5600.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5601[9], i5600.startSizeZ)
  i5600.startRotation3D = !!i5601[10]
  i5600.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5601[11], i5600.startRotationX)
  i5600.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5601[12], i5600.startRotationY)
  i5600.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5601[13], i5600.startRotationZ)
  i5600.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i5601[14], i5600.startColor)
  i5600.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5601[15], i5600.gravityModifier)
  i5600.simulationSpace = i5601[16]
  request.r(i5601[17], i5601[18], 0, i5600, 'customSimulationSpace')
  i5600.simulationSpeed = i5601[19]
  i5600.useUnscaledTime = !!i5601[20]
  i5600.scalingMode = i5601[21]
  i5600.playOnAwake = !!i5601[22]
  i5600.maxParticles = i5601[23]
  i5600.emitterVelocityMode = i5601[24]
  return i5600
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i5602 = root || new pc.MinMaxCurve()
  var i5603 = data
  i5602.mode = i5603[0]
  i5602.curveMin = new pc.AnimationCurve( { keys_flow: i5603[1] } )
  i5602.curveMax = new pc.AnimationCurve( { keys_flow: i5603[2] } )
  i5602.curveMultiplier = i5603[3]
  i5602.constantMin = i5603[4]
  i5602.constantMax = i5603[5]
  return i5602
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i5604 = root || new pc.MinMaxGradient()
  var i5605 = data
  i5604.mode = i5605[0]
  i5604.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i5605[1], i5604.gradientMin)
  i5604.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i5605[2], i5604.gradientMax)
  i5604.colorMin = new pc.Color(i5605[3], i5605[4], i5605[5], i5605[6])
  i5604.colorMax = new pc.Color(i5605[7], i5605[8], i5605[9], i5605[10])
  return i5604
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i5606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i5607 = data
  i5606.mode = i5607[0]
  var i5609 = i5607[1]
  var i5608 = []
  for(var i = 0; i < i5609.length; i += 1) {
    i5608.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i5609[i + 0]) );
  }
  i5606.colorKeys = i5608
  var i5611 = i5607[2]
  var i5610 = []
  for(var i = 0; i < i5611.length; i += 1) {
    i5610.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i5611[i + 0]) );
  }
  i5606.alphaKeys = i5610
  return i5606
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i5612 = root || new pc.ParticleSystemColorBySpeed()
  var i5613 = data
  i5612.enabled = !!i5613[0]
  i5612.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i5613[1], i5612.color)
  i5612.range = new pc.Vec2( i5613[2], i5613[3] )
  return i5612
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i5616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i5617 = data
  i5616.color = new pc.Color(i5617[0], i5617[1], i5617[2], i5617[3])
  i5616.time = i5617[4]
  return i5616
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i5620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i5621 = data
  i5620.alpha = i5621[0]
  i5620.time = i5621[1]
  return i5620
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i5622 = root || new pc.ParticleSystemColorOverLifetime()
  var i5623 = data
  i5622.enabled = !!i5623[0]
  i5622.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i5623[1], i5622.color)
  return i5622
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i5624 = root || new pc.ParticleSystemEmitter()
  var i5625 = data
  i5624.enabled = !!i5625[0]
  i5624.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5625[1], i5624.rateOverTime)
  i5624.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5625[2], i5624.rateOverDistance)
  var i5627 = i5625[3]
  var i5626 = []
  for(var i = 0; i < i5627.length; i += 1) {
    i5626.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i5627[i + 0]) );
  }
  i5624.bursts = i5626
  return i5624
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i5630 = root || new pc.ParticleSystemBurst()
  var i5631 = data
  i5630.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5631[0], i5630.count)
  i5630.cycleCount = i5631[1]
  i5630.minCount = i5631[2]
  i5630.maxCount = i5631[3]
  i5630.repeatInterval = i5631[4]
  i5630.time = i5631[5]
  return i5630
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i5632 = root || new pc.ParticleSystemRotationBySpeed()
  var i5633 = data
  i5632.enabled = !!i5633[0]
  i5632.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5633[1], i5632.x)
  i5632.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5633[2], i5632.y)
  i5632.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5633[3], i5632.z)
  i5632.separateAxes = !!i5633[4]
  i5632.range = new pc.Vec2( i5633[5], i5633[6] )
  return i5632
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i5634 = root || new pc.ParticleSystemRotationOverLifetime()
  var i5635 = data
  i5634.enabled = !!i5635[0]
  i5634.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5635[1], i5634.x)
  i5634.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5635[2], i5634.y)
  i5634.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5635[3], i5634.z)
  i5634.separateAxes = !!i5635[4]
  return i5634
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i5636 = root || new pc.ParticleSystemShape()
  var i5637 = data
  i5636.enabled = !!i5637[0]
  i5636.shapeType = i5637[1]
  i5636.randomDirectionAmount = i5637[2]
  i5636.sphericalDirectionAmount = i5637[3]
  i5636.randomPositionAmount = i5637[4]
  i5636.alignToDirection = !!i5637[5]
  i5636.radius = i5637[6]
  i5636.radiusMode = i5637[7]
  i5636.radiusSpread = i5637[8]
  i5636.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5637[9], i5636.radiusSpeed)
  i5636.radiusThickness = i5637[10]
  i5636.angle = i5637[11]
  i5636.length = i5637[12]
  i5636.boxThickness = new pc.Vec3( i5637[13], i5637[14], i5637[15] )
  i5636.meshShapeType = i5637[16]
  request.r(i5637[17], i5637[18], 0, i5636, 'mesh')
  request.r(i5637[19], i5637[20], 0, i5636, 'meshRenderer')
  request.r(i5637[21], i5637[22], 0, i5636, 'skinnedMeshRenderer')
  i5636.useMeshMaterialIndex = !!i5637[23]
  i5636.meshMaterialIndex = i5637[24]
  i5636.useMeshColors = !!i5637[25]
  i5636.normalOffset = i5637[26]
  i5636.arc = i5637[27]
  i5636.arcMode = i5637[28]
  i5636.arcSpread = i5637[29]
  i5636.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5637[30], i5636.arcSpeed)
  i5636.donutRadius = i5637[31]
  i5636.position = new pc.Vec3( i5637[32], i5637[33], i5637[34] )
  i5636.rotation = new pc.Vec3( i5637[35], i5637[36], i5637[37] )
  i5636.scale = new pc.Vec3( i5637[38], i5637[39], i5637[40] )
  return i5636
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i5638 = root || new pc.ParticleSystemSizeBySpeed()
  var i5639 = data
  i5638.enabled = !!i5639[0]
  i5638.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5639[1], i5638.x)
  i5638.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5639[2], i5638.y)
  i5638.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5639[3], i5638.z)
  i5638.separateAxes = !!i5639[4]
  i5638.range = new pc.Vec2( i5639[5], i5639[6] )
  return i5638
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i5640 = root || new pc.ParticleSystemSizeOverLifetime()
  var i5641 = data
  i5640.enabled = !!i5641[0]
  i5640.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5641[1], i5640.x)
  i5640.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5641[2], i5640.y)
  i5640.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5641[3], i5640.z)
  i5640.separateAxes = !!i5641[4]
  return i5640
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i5642 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i5643 = data
  i5642.enabled = !!i5643[0]
  i5642.mode = i5643[1]
  i5642.animation = i5643[2]
  i5642.numTilesX = i5643[3]
  i5642.numTilesY = i5643[4]
  i5642.useRandomRow = !!i5643[5]
  i5642.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5643[6], i5642.frameOverTime)
  i5642.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5643[7], i5642.startFrame)
  i5642.cycleCount = i5643[8]
  i5642.rowIndex = i5643[9]
  i5642.flipU = i5643[10]
  i5642.flipV = i5643[11]
  i5642.spriteCount = i5643[12]
  return i5642
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i5644 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i5645 = data
  i5644.enabled = !!i5645[0]
  i5644.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5645[1], i5644.x)
  i5644.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5645[2], i5644.y)
  i5644.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5645[3], i5644.z)
  i5644.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5645[4], i5644.speedModifier)
  i5644.space = i5645[5]
  return i5644
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i5646 = root || new pc.ParticleSystemNoise()
  var i5647 = data
  i5646.enabled = !!i5647[0]
  i5646.separateAxes = !!i5647[1]
  i5646.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5647[2], i5646.strengthX)
  i5646.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5647[3], i5646.strengthY)
  i5646.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5647[4], i5646.strengthZ)
  i5646.frequency = i5647[5]
  i5646.damping = !!i5647[6]
  i5646.octaveCount = i5647[7]
  i5646.octaveMultiplier = i5647[8]
  i5646.octaveScale = i5647[9]
  i5646.quality = i5647[10]
  i5646.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5647[11], i5646.scrollSpeed)
  i5646.scrollSpeedMultiplier = i5647[12]
  i5646.remapEnabled = !!i5647[13]
  i5646.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5647[14], i5646.remapX)
  i5646.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5647[15], i5646.remapY)
  i5646.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5647[16], i5646.remapZ)
  i5646.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5647[17], i5646.positionAmount)
  i5646.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5647[18], i5646.rotationAmount)
  i5646.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5647[19], i5646.sizeAmount)
  return i5646
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i5648 = root || new pc.ParticleSystemInheritVelocity()
  var i5649 = data
  i5648.enabled = !!i5649[0]
  i5648.mode = i5649[1]
  i5648.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5649[2], i5648.curve)
  return i5648
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i5650 = root || new pc.ParticleSystemForceOverLifetime()
  var i5651 = data
  i5650.enabled = !!i5651[0]
  i5650.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5651[1], i5650.x)
  i5650.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5651[2], i5650.y)
  i5650.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5651[3], i5650.z)
  i5650.space = i5651[4]
  i5650.randomized = !!i5651[5]
  return i5650
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i5652 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i5653 = data
  i5652.enabled = !!i5653[0]
  i5652.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5653[1], i5652.limitX)
  i5652.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5653[2], i5652.limitY)
  i5652.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5653[3], i5652.limitZ)
  i5652.dampen = i5653[4]
  i5652.separateAxes = !!i5653[5]
  i5652.space = i5653[6]
  i5652.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5653[7], i5652.drag)
  i5652.multiplyDragByParticleSize = !!i5653[8]
  i5652.multiplyDragByParticleVelocity = !!i5653[9]
  return i5652
}

Deserializers["LootableItem"] = function (request, data, root) {
  var i5654 = root || request.c( 'LootableItem' )
  var i5655 = data
  i5654.OnLootableItemCollected = request.d('LootableItemEvent', i5655[0], i5654.OnLootableItemCollected)
  request.r(i5655[1], i5655[2], 0, i5654, 'item')
  i5654.kind = i5655[3]
  return i5654
}

Deserializers["LootableItemEvent"] = function (request, data, root) {
  var i5656 = root || request.c( 'LootableItemEvent' )
  var i5657 = data
  i5656.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i5657[0], i5656.m_PersistentCalls)
  return i5656
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i5658 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i5659 = data
  var i5661 = i5659[0]
  var i5660 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i5661.length; i += 1) {
    i5660.add(request.d('UnityEngine.Events.PersistentCall', i5661[i + 0]));
  }
  i5658.m_Calls = i5660
  return i5658
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i5664 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i5665 = data
  request.r(i5665[0], i5665[1], 0, i5664, 'm_Target')
  i5664.m_MethodName = i5665[2]
  i5664.m_Mode = i5665[3]
  i5664.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i5665[4], i5664.m_Arguments)
  i5664.m_CallState = i5665[5]
  return i5664
}

Deserializers["LightPole"] = function (request, data, root) {
  var i5666 = root || request.c( 'LightPole' )
  var i5667 = data
  return i5666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i5668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i5669 = data
  i5668.pivot = new pc.Vec2( i5669[0], i5669[1] )
  i5668.anchorMin = new pc.Vec2( i5669[2], i5669[3] )
  i5668.anchorMax = new pc.Vec2( i5669[4], i5669[5] )
  i5668.sizeDelta = new pc.Vec2( i5669[6], i5669[7] )
  i5668.anchoredPosition3D = new pc.Vec3( i5669[8], i5669[9], i5669[10] )
  i5668.rotation = new pc.Quat(i5669[11], i5669[12], i5669[13], i5669[14])
  i5668.scale = new pc.Vec3( i5669[15], i5669[16], i5669[17] )
  return i5668
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i5670 = root || request.c( 'UnityEngine.UI.Slider' )
  var i5671 = data
  request.r(i5671[0], i5671[1], 0, i5670, 'm_FillRect')
  request.r(i5671[2], i5671[3], 0, i5670, 'm_HandleRect')
  i5670.m_Direction = i5671[4]
  i5670.m_MinValue = i5671[5]
  i5670.m_MaxValue = i5671[6]
  i5670.m_WholeNumbers = !!i5671[7]
  i5670.m_Value = i5671[8]
  i5670.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i5671[9], i5670.m_OnValueChanged)
  i5670.m_Navigation = request.d('UnityEngine.UI.Navigation', i5671[10], i5670.m_Navigation)
  i5670.m_Transition = i5671[11]
  i5670.m_Colors = request.d('UnityEngine.UI.ColorBlock', i5671[12], i5670.m_Colors)
  i5670.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i5671[13], i5670.m_SpriteState)
  i5670.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i5671[14], i5670.m_AnimationTriggers)
  i5670.m_Interactable = !!i5671[15]
  request.r(i5671[16], i5671[17], 0, i5670, 'm_TargetGraphic')
  return i5670
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i5672 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i5673 = data
  i5672.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i5673[0], i5672.m_PersistentCalls)
  return i5672
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i5674 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i5675 = data
  i5674.m_Mode = i5675[0]
  request.r(i5675[1], i5675[2], 0, i5674, 'm_SelectOnUp')
  request.r(i5675[3], i5675[4], 0, i5674, 'm_SelectOnDown')
  request.r(i5675[5], i5675[6], 0, i5674, 'm_SelectOnLeft')
  request.r(i5675[7], i5675[8], 0, i5674, 'm_SelectOnRight')
  return i5674
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i5676 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i5677 = data
  i5676.m_NormalColor = new pc.Color(i5677[0], i5677[1], i5677[2], i5677[3])
  i5676.m_HighlightedColor = new pc.Color(i5677[4], i5677[5], i5677[6], i5677[7])
  i5676.m_PressedColor = new pc.Color(i5677[8], i5677[9], i5677[10], i5677[11])
  i5676.m_SelectedColor = new pc.Color(i5677[12], i5677[13], i5677[14], i5677[15])
  i5676.m_DisabledColor = new pc.Color(i5677[16], i5677[17], i5677[18], i5677[19])
  i5676.m_ColorMultiplier = i5677[20]
  i5676.m_FadeDuration = i5677[21]
  return i5676
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i5678 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i5679 = data
  request.r(i5679[0], i5679[1], 0, i5678, 'm_HighlightedSprite')
  request.r(i5679[2], i5679[3], 0, i5678, 'm_PressedSprite')
  request.r(i5679[4], i5679[5], 0, i5678, 'm_SelectedSprite')
  request.r(i5679[6], i5679[7], 0, i5678, 'm_DisabledSprite')
  return i5678
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i5680 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i5681 = data
  i5680.m_NormalTrigger = i5681[0]
  i5680.m_HighlightedTrigger = i5681[1]
  i5680.m_PressedTrigger = i5681[2]
  i5680.m_SelectedTrigger = i5681[3]
  i5680.m_DisabledTrigger = i5681[4]
  return i5680
}

Deserializers["WheatSliderWidget"] = function (request, data, root) {
  var i5682 = root || request.c( 'WheatSliderWidget' )
  var i5683 = data
  request.r(i5683[0], i5683[1], 0, i5682, 'amountText')
  request.r(i5683[2], i5683[3], 0, i5682, 'BarIconImage')
  request.r(i5683[4], i5683[5], 0, i5682, 'WheatImage')
  request.r(i5683[6], i5683[7], 0, i5682, 'products')
  return i5682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i5684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i5685 = data
  i5684.cullTransparentMesh = !!i5685[0]
  return i5684
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i5686 = root || request.c( 'UnityEngine.UI.Text' )
  var i5687 = data
  i5686.m_FontData = request.d('UnityEngine.UI.FontData', i5687[0], i5686.m_FontData)
  i5686.m_Text = i5687[1]
  request.r(i5687[2], i5687[3], 0, i5686, 'm_Material')
  i5686.m_Maskable = !!i5687[4]
  i5686.m_Color = new pc.Color(i5687[5], i5687[6], i5687[7], i5687[8])
  i5686.m_RaycastTarget = !!i5687[9]
  return i5686
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i5688 = root || request.c( 'UnityEngine.UI.FontData' )
  var i5689 = data
  request.r(i5689[0], i5689[1], 0, i5688, 'm_Font')
  i5688.m_FontSize = i5689[2]
  i5688.m_FontStyle = i5689[3]
  i5688.m_BestFit = !!i5689[4]
  i5688.m_MinSize = i5689[5]
  i5688.m_MaxSize = i5689[6]
  i5688.m_Alignment = i5689[7]
  i5688.m_AlignByGeometry = !!i5689[8]
  i5688.m_RichText = !!i5689[9]
  i5688.m_HorizontalOverflow = i5689[10]
  i5688.m_VerticalOverflow = i5689[11]
  i5688.m_LineSpacing = i5689[12]
  return i5688
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i5690 = root || request.c( 'UnityEngine.UI.Image' )
  var i5691 = data
  request.r(i5691[0], i5691[1], 0, i5690, 'm_Sprite')
  i5690.m_Type = i5691[2]
  i5690.m_PreserveAspect = !!i5691[3]
  i5690.m_FillCenter = !!i5691[4]
  i5690.m_FillMethod = i5691[5]
  i5690.m_FillAmount = i5691[6]
  i5690.m_FillClockwise = !!i5691[7]
  i5690.m_FillOrigin = i5691[8]
  i5690.m_UseSpriteMesh = !!i5691[9]
  i5690.m_PixelsPerUnitMultiplier = i5691[10]
  request.r(i5691[11], i5691[12], 0, i5690, 'm_Material')
  i5690.m_Maskable = !!i5691[13]
  i5690.m_Color = new pc.Color(i5691[14], i5691[15], i5691[16], i5691[17])
  i5690.m_RaycastTarget = !!i5691[18]
  return i5690
}

Deserializers["UnityEngine.UI.LayoutElement"] = function (request, data, root) {
  var i5692 = root || request.c( 'UnityEngine.UI.LayoutElement' )
  var i5693 = data
  i5692.m_IgnoreLayout = !!i5693[0]
  i5692.m_MinWidth = i5693[1]
  i5692.m_MinHeight = i5693[2]
  i5692.m_PreferredWidth = i5693[3]
  i5692.m_PreferredHeight = i5693[4]
  i5692.m_FlexibleWidth = i5693[5]
  i5692.m_FlexibleHeight = i5693[6]
  i5692.m_LayoutPriority = i5693[7]
  return i5692
}

Deserializers["HealthBar"] = function (request, data, root) {
  var i5694 = root || request.c( 'HealthBar' )
  var i5695 = data
  request.r(i5695[0], i5695[1], 0, i5694, 'HealthProvider')
  request.r(i5695[2], i5695[3], 0, i5694, 'progressImage')
  request.r(i5695[4], i5695[5], 0, i5694, 'BarIconImage')
  return i5694
}

Deserializers["ShieldBar"] = function (request, data, root) {
  var i5696 = root || request.c( 'ShieldBar' )
  var i5697 = data
  request.r(i5697[0], i5697[1], 0, i5696, 'progressImage')
  request.r(i5697[2], i5697[3], 0, i5696, 'barIconImage')
  request.r(i5697[4], i5697[5], 0, i5696, 'root')
  return i5696
}

Deserializers["UIActiveBoost"] = function (request, data, root) {
  var i5698 = root || request.c( 'UIActiveBoost' )
  var i5699 = data
  request.r(i5699[0], i5699[1], 0, i5698, 'imgIcon')
  request.r(i5699[2], i5699[3], 0, i5698, 'timerImg')
  var i5701 = i5699[4]
  var i5700 = []
  for(var i = 0; i < i5701.length; i += 1) {
    i5700.push( request.d('UIActiveBoost+SpriteByKind', i5701[i + 0]) );
  }
  i5698.sprites = i5700
  i5698.Kind = i5699[5]
  return i5698
}

Deserializers["UIActiveBoost+SpriteByKind"] = function (request, data, root) {
  var i5704 = root || request.c( 'UIActiveBoost+SpriteByKind' )
  var i5705 = data
  i5704.Kind = i5705[0]
  request.r(i5705[1], i5705[2], 0, i5704, 'Sprite')
  return i5704
}

Deserializers["ShootButtonCtrl"] = function (request, data, root) {
  var i5706 = root || request.c( 'ShootButtonCtrl' )
  var i5707 = data
  request.r(i5707[0], i5707[1], 0, i5706, 'txtAmount')
  request.r(i5707[2], i5707[3], 0, i5706, 'timerImg')
  request.r(i5707[4], i5707[5], 0, i5706, 'products')
  return i5706
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i5708 = root || request.c( 'UnityEngine.UI.Button' )
  var i5709 = data
  i5708.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i5709[0], i5708.m_OnClick)
  i5708.m_Navigation = request.d('UnityEngine.UI.Navigation', i5709[1], i5708.m_Navigation)
  i5708.m_Transition = i5709[2]
  i5708.m_Colors = request.d('UnityEngine.UI.ColorBlock', i5709[3], i5708.m_Colors)
  i5708.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i5709[4], i5708.m_SpriteState)
  i5708.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i5709[5], i5708.m_AnimationTriggers)
  i5708.m_Interactable = !!i5709[6]
  request.r(i5709[7], i5709[8], 0, i5708, 'm_TargetGraphic')
  return i5708
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i5710 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i5711 = data
  i5710.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i5711[0], i5710.m_PersistentCalls)
  return i5710
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i5712 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i5713 = data
  request.r(i5713[0], i5713[1], 0, i5712, 'm_ObjectArgument')
  i5712.m_ObjectArgumentAssemblyTypeName = i5713[2]
  i5712.m_IntArgument = i5713[3]
  i5712.m_FloatArgument = i5713[4]
  i5712.m_StringArgument = i5713[5]
  i5712.m_BoolArgument = !!i5713[6]
  return i5712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i5714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i5715 = data
  i5714.mass = i5715[0]
  i5714.drag = i5715[1]
  i5714.angularDrag = i5715[2]
  i5714.useGravity = !!i5715[3]
  i5714.isKinematic = !!i5715[4]
  i5714.constraints = i5715[5]
  i5714.maxAngularVelocity = i5715[6]
  i5714.collisionDetectionMode = i5715[7]
  i5714.interpolation = i5715[8]
  return i5714
}

Deserializers["CarController"] = function (request, data, root) {
  var i5716 = root || request.c( 'CarController' )
  var i5717 = data
  var i5719 = i5717[0]
  var i5718 = []
  for(var i = 0; i < i5719.length; i += 2) {
  request.r(i5719[i + 0], i5719[i + 1], 2, i5718, '')
  }
  i5716.m_WheelColliders = i5718
  i5716.TorqueMultiplier = i5717[1]
  i5716.m_CarDriveType = i5717[2]
  var i5721 = i5717[3]
  var i5720 = []
  for(var i = 0; i < i5721.length; i += 2) {
  request.r(i5721[i + 0], i5721[i + 1], 2, i5720, '')
  }
  i5716.m_WheelMeshes = i5720
  var i5723 = i5717[4]
  var i5722 = []
  for(var i = 0; i < i5723.length; i += 2) {
  request.r(i5723[i + 0], i5723[i + 1], 2, i5722, '')
  }
  i5716.m_WheelEffects = i5722
  i5716.m_CentreOfMassOffset = new pc.Vec3( i5717[5], i5717[6], i5717[7] )
  i5716.m_MaximumSteerAngle = i5717[8]
  i5716.m_SteerHelper = i5717[9]
  i5716.m_TractionControl = i5717[10]
  i5716.m_FullTorqueOverAllWheels = i5717[11]
  i5716.m_ReverseTorque = i5717[12]
  i5716.m_MaxHandbrakeTorque = i5717[13]
  i5716.m_Downforce = i5717[14]
  i5716.m_SpeedType = i5717[15]
  i5716.m_Topspeed = i5717[16]
  i5716.m_RevRangeBoundary = i5717[17]
  i5716.m_SlipLimit = i5717[18]
  i5716.m_BrakeTorque = i5717[19]
  i5716.m_GearNum = i5717[20]
  request.r(i5717[21], i5717[22], 0, i5716, 'm_Rigidbody')
  return i5716
}

Deserializers["CarUserControl"] = function (request, data, root) {
  var i5730 = root || request.c( 'CarUserControl' )
  var i5731 = data
  i5730.CanMove = !!i5731[0]
  request.r(i5731[1], i5731[2], 0, i5730, 'pathCreator')
  request.r(i5731[3], i5731[4], 0, i5730, 'playerCarrot')
  request.r(i5731[5], i5731[6], 0, i5730, 'farPointInDirectionOfView')
  request.r(i5731[7], i5731[8], 0, i5730, 'ghostWriter')
  request.r(i5731[9], i5731[10], 0, i5730, 'carBody')
  request.r(i5731[11], i5731[12], 0, i5730, 'collisionParticlesLeft')
  request.r(i5731[13], i5731[14], 0, i5730, 'collisionParticlesRight')
  return i5730
}

Deserializers["UnityStandardAssets.Vehicles.Car.CarAudio"] = function (request, data, root) {
  var i5732 = root || request.c( 'UnityStandardAssets.Vehicles.Car.CarAudio' )
  var i5733 = data
  i5732.engineSoundStyle = i5733[0]
  request.r(i5733[1], i5733[2], 0, i5732, 'lowAccelClip')
  request.r(i5733[3], i5733[4], 0, i5732, 'lowDecelClip')
  request.r(i5733[5], i5733[6], 0, i5732, 'highAccelClip')
  request.r(i5733[7], i5733[8], 0, i5732, 'highDecelClip')
  i5732.pitchMultiplier = i5733[9]
  i5732.lowPitchMin = i5733[10]
  i5732.lowPitchMax = i5733[11]
  i5732.highPitchMultiplier = i5733[12]
  i5732.maxRolloffDistance = i5733[13]
  i5732.dopplerLevel = i5733[14]
  return i5732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i5734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i5735 = data
  i5734.center = new pc.Vec3( i5735[0], i5735[1], i5735[2] )
  i5734.size = new pc.Vec3( i5735[3], i5735[4], i5735[5] )
  i5734.enabled = !!i5735[6]
  i5734.isTrigger = !!i5735[7]
  request.r(i5735[8], i5735[9], 0, i5734, 'material')
  return i5734
}

Deserializers["RaceCar"] = function (request, data, root) {
  var i5736 = root || request.c( 'RaceCar' )
  var i5737 = data
  i5736.Owner = i5737[0]
  i5736.Score = i5737[1]
  request.r(i5737[2], i5737[3], 0, i5736, 'boosts')
  request.r(i5737[4], i5737[5], 0, i5736, 'products')
  request.r(i5737[6], i5737[7], 0, i5736, 'boostsEffectPosition')
  request.r(i5737[8], i5737[9], 0, i5736, 'effectSheildPrefab')
  request.r(i5737[10], i5737[11], 0, i5736, 'effectDoublePrefab')
  return i5736
}

Deserializers["HealthController"] = function (request, data, root) {
  var i5738 = root || request.c( 'HealthController' )
  var i5739 = data
  i5738.Health = i5739[0]
  i5738.MaxHealth = i5739[1]
  i5738.Shield = i5739[2]
  i5738.MaxShield = i5739[3]
  request.r(i5739[4], i5739[5], 0, i5738, 'MainScreen')
  request.r(i5739[6], i5739[7], 0, i5738, 'LossScreen')
  request.r(i5739[8], i5739[9], 0, i5738, 'boosts')
  return i5738
}

Deserializers["Gun"] = function (request, data, root) {
  var i5740 = root || request.c( 'Gun' )
  var i5741 = data
  request.r(i5741[0], i5741[1], 0, i5740, 'rocketPrefab')
  request.r(i5741[2], i5741[3], 0, i5740, 'carUserControl')
  request.r(i5741[4], i5741[5], 0, i5740, 'products')
  return i5740
}

Deserializers["JustWheelMeshes"] = function (request, data, root) {
  var i5742 = root || request.c( 'JustWheelMeshes' )
  var i5743 = data
  var i5745 = i5743[0]
  var i5744 = []
  for(var i = 0; i < i5745.length; i += 2) {
  request.r(i5745[i + 0], i5745[i + 1], 2, i5744, '')
  }
  i5742.m_WheelMeshes = i5744
  return i5742
}

Deserializers["BlobShadowMovement"] = function (request, data, root) {
  var i5746 = root || request.c( 'BlobShadowMovement' )
  var i5747 = data
  request.r(i5747[0], i5747[1], 0, i5746, 'Target')
  i5746.Offset = new pc.Vec3( i5747[2], i5747[3], i5747[4] )
  return i5746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i5748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i5749 = data
  request.r(i5749[0], i5749[1], 0, i5748, 'clip')
  i5748.playOnAwake = !!i5749[2]
  i5748.loop = !!i5749[3]
  i5748.enabled = !!i5749[4]
  return i5748
}

Deserializers["WheelEffects"] = function (request, data, root) {
  var i5750 = root || request.c( 'WheelEffects' )
  var i5751 = data
  request.r(i5751[0], i5751[1], 0, i5750, 'SkidTrailPrefab')
  request.r(i5751[2], i5751[3], 0, i5750, 'skidParticles')
  return i5750
}

Deserializers["Rocket"] = function (request, data, root) {
  var i5752 = root || request.c( 'Rocket' )
  var i5753 = data
  request.r(i5753[0], i5753[1], 0, i5752, 'jetStream')
  request.r(i5753[2], i5753[3], 0, i5752, 'explosionPrefab')
  return i5752
}

Deserializers["Explosion"] = function (request, data, root) {
  var i5754 = root || request.c( 'Explosion' )
  var i5755 = data
  request.r(i5755[0], i5755[1], 0, i5754, 'explosionParticleSystem')
  return i5754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i5756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i5757 = data
  request.r(i5757[0], i5757[1], 0, i5756, 'animatorController')
  i5756.updateMode = i5757[2]
  var i5759 = i5757[3]
  var i5758 = []
  for(var i = 0; i < i5759.length; i += 2) {
  request.r(i5759[i + 0], i5759[i + 1], 2, i5758, '')
  }
  i5756.humanBones = i5758
  i5756.enabled = !!i5757[4]
  return i5756
}

Deserializers["DriverDescription"] = function (request, data, root) {
  var i5762 = root || request.c( 'DriverDescription' )
  var i5763 = data
  var i5765 = i5763[0]
  var i5764 = []
  for(var i = 0; i < i5765.length; i += 2) {
  request.r(i5765[i + 0], i5765[i + 1], 2, i5764, '')
  }
  i5762.driverPrefab = i5764
  return i5762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i5766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i5767 = data
  i5766.enabled = !!i5767[0]
  request.r(i5767[1], i5767[2], 0, i5766, 'sharedMaterial')
  var i5769 = i5767[3]
  var i5768 = []
  for(var i = 0; i < i5769.length; i += 2) {
  request.r(i5769[i + 0], i5769[i + 1], 2, i5768, '')
  }
  i5766.sharedMaterials = i5768
  i5766.receiveShadows = !!i5767[4]
  i5766.shadowCastingMode = i5767[5]
  i5766.sortingLayerID = i5767[6]
  i5766.sortingOrder = i5767[7]
  i5766.lightmapIndex = i5767[8]
  i5766.lightmapSceneIndex = i5767[9]
  i5766.lightmapScaleOffset = new pc.Vec4( i5767[10], i5767[11], i5767[12], i5767[13] )
  i5766.lightProbeUsage = i5767[14]
  i5766.reflectionProbeUsage = i5767[15]
  request.r(i5767[16], i5767[17], 0, i5766, 'sharedMesh')
  var i5771 = i5767[18]
  var i5770 = []
  for(var i = 0; i < i5771.length; i += 2) {
  request.r(i5771[i + 0], i5771[i + 1], 2, i5770, '')
  }
  i5766.bones = i5770
  i5766.updateWhenOffscreen = !!i5767[19]
  i5766.localBounds = i5767[20]
  request.r(i5767[21], i5767[22], 0, i5766, 'rootBone')
  var i5773 = i5767[23]
  var i5772 = []
  for(var i = 0; i < i5773.length; i += 1) {
    i5772.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i5773[i + 0]) );
  }
  i5766.blendShapesWeights = i5772
  return i5766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i5776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i5777 = data
  i5776.weight = i5777[0]
  return i5776
}

Deserializers["TrackHandles"] = function (request, data, root) {
  var i5778 = root || request.c( 'TrackHandles' )
  var i5779 = data
  request.r(i5779[0], i5779[1], 0, i5778, 'MainPath')
  i5778.OnFinishReached = request.d('UnityEngine.Events.UnityEvent', i5779[2], i5778.OnFinishReached)
  request.r(i5779[3], i5779[4], 0, i5778, 'Root')
  return i5778
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i5780 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i5781 = data
  i5780.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i5781[0], i5780.m_PersistentCalls)
  return i5780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i5782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i5783 = data
  i5782.enabled = !!i5783[0]
  i5782.isTrigger = !!i5783[1]
  request.r(i5783[2], i5783[3], 0, i5782, 'material')
  request.r(i5783[4], i5783[5], 0, i5782, 'sharedMesh')
  i5782.convex = !!i5783[6]
  return i5782
}

Deserializers["FinishTrigger"] = function (request, data, root) {
  var i5784 = root || request.c( 'FinishTrigger' )
  var i5785 = data
  request.r(i5785[0], i5785[1], 0, i5784, 'trackHandles')
  return i5784
}

Deserializers["PathCreation.PathCreator"] = function (request, data, root) {
  var i5786 = root || request.c( 'PathCreation.PathCreator' )
  var i5787 = data
  i5786.editorData = request.d('PathCreation.PathCreatorData', i5787[0], i5786.editorData)
  i5786.initialized = !!i5787[1]
  return i5786
}

Deserializers["PathCreation.PathCreatorData"] = function (request, data, root) {
  var i5788 = root || request.c( 'PathCreation.PathCreatorData' )
  var i5789 = data
  i5788.vertexPathMaxAngleError = i5789[0]
  i5788.vertexPathMinVertexSpacing = i5789[1]
  i5788.showTransformTool = !!i5789[2]
  i5788.showPathBounds = !!i5789[3]
  i5788.showPerSegmentBounds = !!i5789[4]
  i5788.displayAnchorPoints = !!i5789[5]
  i5788.displayControlPoints = !!i5789[6]
  i5788.bezierHandleScale = i5789[7]
  i5788.globalDisplaySettingsFoldout = !!i5789[8]
  i5788.keepConstantHandleSize = !!i5789[9]
  i5788.showNormalsInVertexMode = !!i5789[10]
  i5788.showBezierPathInVertexMode = !!i5789[11]
  i5788.showDisplayOptions = !!i5789[12]
  i5788.showPathOptions = !!i5789[13]
  i5788.showVertexPathDisplayOptions = !!i5789[14]
  i5788.showVertexPathOptions = !!i5789[15]
  i5788.showNormals = !!i5789[16]
  i5788.showNormalsHelpInfo = !!i5789[17]
  i5788.tabIndex = i5789[18]
  i5788._bezierPath = request.d('PathCreation.BezierPath', i5789[19], i5788._bezierPath)
  i5788.vertexPathUpToDate = !!i5789[20]
  return i5788
}

Deserializers["PathCreation.BezierPath"] = function (request, data, root) {
  var i5790 = root || request.c( 'PathCreation.BezierPath' )
  var i5791 = data
  var i5793 = i5791[0]
  var i5792 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i5793.length; i += 3) {
    i5792.add(new pc.Vec3( i5793[i + 0], i5793[i + 1], i5793[i + 2] ));
  }
  i5790.points = i5792
  i5790.isClosed = !!i5791[1]
  i5790.space = i5791[2]
  i5790.controlMode = i5791[3]
  i5790.autoControlLength = i5791[4]
  i5790.boundsUpToDate = !!i5791[5]
  var i5795 = i5791[6]
  var i5794 = new (System.Collections.Generic.List$1(Bridge.ns('System.Single')))
  for(var i = 0; i < i5795.length; i += 1) {
    i5794.add(i5795[i + 0]);
  }
  i5790.perAnchorNormalsAngle = i5794
  i5790.globalNormalsAngle = i5791[7]
  i5790.flipNormals = !!i5791[8]
  return i5790
}

Deserializers["GameManager"] = function (request, data, root) {
  var i5800 = root || request.c( 'GameManager' )
  var i5801 = data
  request.r(i5801[0], i5801[1], 0, i5800, 'MainCamera')
  i5800.LandscapeFov = i5801[2]
  i5800.PortraitFov = i5801[3]
  i5800.WheatCullDistance = i5801[4]
  request.r(i5801[5], i5801[6], 0, i5800, 'CountdownWidget')
  request.r(i5801[7], i5801[8], 0, i5800, 'TutorialWindow')
  request.r(i5801[9], i5801[10], 0, i5800, 'MainBackroundImage')
  request.r(i5801[11], i5801[12], 0, i5800, 'WinScreen')
  request.r(i5801[13], i5801[14], 0, i5800, 'LoseScreen')
  request.r(i5801[15], i5801[16], 0, i5800, 'MainScreen')
  request.r(i5801[17], i5801[18], 0, i5800, 'btnLeft')
  request.r(i5801[19], i5801[20], 0, i5800, 'btnRight')
  request.r(i5801[21], i5801[22], 0, i5800, 'healthBar')
  var i5803 = i5801[23]
  var i5802 = []
  for(var i = 0; i < i5803.length; i += 2) {
  request.r(i5803[i + 0], i5803[i + 1], 2, i5802, '')
  }
  i5800.Opponents = i5802
  request.r(i5801[24], i5801[25], 0, i5800, 'PlayerCar')
  request.r(i5801[26], i5801[27], 0, i5800, 'CarUserControl')
  i5800.Position = i5801[28]
  request.r(i5801[29], i5801[30], 0, i5800, 'LastCheckpoint')
  request.r(i5801[31], i5801[32], 0, i5800, 'healthController')
  var i5805 = i5801[33]
  var i5804 = []
  for(var i = 0; i < i5805.length; i += 2) {
  request.r(i5805[i + 0], i5805[i + 1], 2, i5804, '')
  }
  i5800.tracktors = i5804
  var i5807 = i5801[34]
  var i5806 = []
  for(var i = 0; i < i5807.length; i += 2) {
  request.r(i5807[i + 0], i5807[i + 1], 2, i5806, '')
  }
  i5800.drivers = i5806
  var i5809 = i5801[35]
  var i5808 = []
  for(var i = 0; i < i5809.length; i += 2) {
  request.r(i5809[i + 0], i5809[i + 1], 2, i5808, '')
  }
  i5800.trackPrefabs = i5808
  request.r(i5801[36], i5801[37], 0, i5800, 'trackParent')
  i5800._WheatCullDistance = i5801[38]
  request.r(i5801[39], i5801[40], 0, i5800, 'trackContentGenerator')
  request.r(i5801[41], i5801[42], 0, i5800, 'wheatGenerator')
  request.r(i5801[43], i5801[44], 0, i5800, 'roadGenerator')
  request.r(i5801[45], i5801[46], 0, i5800, 'ghostReader')
  return i5800
}

Deserializers["LunaUIFields"] = function (request, data, root) {
  var i5814 = root || request.c( 'LunaUIFields' )
  var i5815 = data
  request.r(i5815[0], i5815[1], 0, i5814, 'ObjectiveHintText')
  i5814.ObjectiveHintString = i5815[2]
  request.r(i5815[3], i5815[4], 0, i5814, 'LevelFailedButtonText')
  i5814.LevelFailedButtonString = i5815[5]
  request.r(i5815[6], i5815[7], 0, i5814, 'LevelCompleteButtonText')
  i5814.LevelCompleteButtonString = i5815[8]
  return i5814
}

Deserializers["Localization"] = function (request, data, root) {
  var i5816 = root || request.c( 'Localization' )
  var i5817 = data
  request.r(i5817[0], i5817[1], 0, i5816, 'englishAsset')
  request.r(i5817[2], i5817[3], 0, i5816, 'russianAsset')
  return i5816
}

Deserializers["WheatGenerator"] = function (request, data, root) {
  var i5818 = root || request.c( 'WheatGenerator' )
  var i5819 = data
  request.r(i5819[0], i5819[1], 0, i5818, 'wheatPiece')
  request.r(i5819[2], i5819[3], 0, i5818, 'trackContentGenerator')
  request.r(i5819[4], i5819[5], 0, i5818, 'carUserControl')
  return i5818
}

Deserializers["Products"] = function (request, data, root) {
  var i5820 = root || request.c( 'Products' )
  var i5821 = data
  i5820.OnProductsNumberChanged = request.d('ProductsEvent', i5821[0], i5820.OnProductsNumberChanged)
  return i5820
}

Deserializers["ProductsEvent"] = function (request, data, root) {
  var i5822 = root || request.c( 'ProductsEvent' )
  var i5823 = data
  i5822.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i5823[0], i5822.m_PersistentCalls)
  return i5822
}

Deserializers["TrackContentGenerator"] = function (request, data, root) {
  var i5824 = root || request.c( 'TrackContentGenerator' )
  var i5825 = data
  request.r(i5825[0], i5825[1], 0, i5824, 'healthController')
  var i5827 = i5825[2]
  var i5826 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i5827.length; i += 2) {
  request.r(i5827[i + 0], i5827[i + 1], 1, i5826, '')
  }
  i5824.AlreadyGenerated = i5826
  request.r(i5825[3], i5825[4], 0, i5824, 'parentForPlacing')
  var i5829 = i5825[5]
  var i5828 = []
  for(var i = 0; i < i5829.length; i += 2) {
  request.r(i5829[i + 0], i5829[i + 1], 2, i5828, '')
  }
  i5824.obstaclesPrefabs = i5828
  var i5831 = i5825[6]
  var i5830 = []
  for(var i = 0; i < i5831.length; i += 2) {
  request.r(i5831[i + 0], i5831[i + 1], 2, i5830, '')
  }
  i5824.hardObstaclesPrefabs = i5830
  var i5833 = i5825[7]
  var i5832 = []
  for(var i = 0; i < i5833.length; i += 2) {
  request.r(i5833[i + 0], i5833[i + 1], 2, i5832, '')
  }
  i5824.bonusesPrefabs = i5832
  request.r(i5825[8], i5825[9], 0, i5824, 'configFile')
  request.r(i5825[10], i5825[11], 0, i5824, 'products')
  request.r(i5825[12], i5825[13], 0, i5824, 'boosts')
  return i5824
}

Deserializers["Boosts"] = function (request, data, root) {
  var i5836 = root || request.c( 'Boosts' )
  var i5837 = data
  var i5839 = i5837[0]
  var i5838 = new (System.Collections.Generic.List$1(Bridge.ns('Boosts+DataItem')))
  for(var i = 0; i < i5839.length; i += 1) {
    i5838.add(request.d('Boosts+DataItem', i5839[i + 0]));
  }
  i5836.Data = i5838
  return i5836
}

Deserializers["Boosts+DataItem"] = function (request, data, root) {
  var i5842 = root || request.c( 'Boosts+DataItem' )
  var i5843 = data
  i5842.Kind = i5843[0]
  i5842.TimeLeft = i5843[1]
  return i5842
}

Deserializers["GhostWriter"] = function (request, data, root) {
  var i5844 = root || request.c( 'GhostWriter' )
  var i5845 = data
  i5844.timer = i5845[0]
  var i5847 = i5845[1]
  var i5846 = new (System.Collections.Generic.List$1(Bridge.ns('GhostWriter+Entry')))
  for(var i = 0; i < i5847.length; i += 1) {
    i5846.add(request.d('GhostWriter+Entry', i5847[i + 0]));
  }
  i5844.data = i5846
  request.r(i5845[2], i5845[3], 0, i5844, 'carUserControl')
  return i5844
}

Deserializers["GhostWriter+Entry"] = function (request, data, root) {
  var i5850 = root || request.c( 'GhostWriter+Entry' )
  var i5851 = data
  i5850.kind = i5851[0]
  i5850.time = i5851[1]
  i5850.distance = i5851[2]
  i5850.sideOffset = i5851[3]
  i5850.speed = i5851[4]
  return i5850
}

Deserializers["GhostReader"] = function (request, data, root) {
  var i5852 = root || request.c( 'GhostReader' )
  var i5853 = data
  request.r(i5853[0], i5853[1], 0, i5852, 'ghost')
  request.r(i5853[2], i5853[3], 0, i5852, 'pathCreator')
  i5852.timer = i5853[4]
  var i5855 = i5853[5]
  var i5854 = new (System.Collections.Generic.List$1(Bridge.ns('GhostReader+Entry')))
  for(var i = 0; i < i5855.length; i += 1) {
    i5854.add(request.d('GhostReader+Entry', i5855[i + 0]));
  }
  i5852.data = i5854
  return i5852
}

Deserializers["GhostReader+Entry"] = function (request, data, root) {
  var i5858 = root || request.c( 'GhostReader+Entry' )
  var i5859 = data
  i5858.kind = i5859[0]
  i5858.time = i5859[1]
  i5858.distance = i5859[2]
  i5858.sideOffset = i5859[3]
  i5858.speed = i5859[4]
  return i5858
}

Deserializers["RoadGenerator"] = function (request, data, root) {
  var i5860 = root || request.c( 'RoadGenerator' )
  var i5861 = data
  request.r(i5861[0], i5861[1], 0, i5860, 'fencePiece')
  return i5860
}

Deserializers["UnityStandardAssets.Cameras.AutoCam"] = function (request, data, root) {
  var i5862 = root || request.c( 'UnityStandardAssets.Cameras.AutoCam' )
  var i5863 = data
  i5862.m_MoveSpeed = i5863[0]
  i5862.m_TurnSpeed = i5863[1]
  i5862.m_RollSpeed = i5863[2]
  i5862.m_FollowVelocity = !!i5863[3]
  i5862.m_FollowTilt = !!i5863[4]
  i5862.m_SpinTurnLimit = i5863[5]
  i5862.m_TargetVelocityLowerLimit = i5863[6]
  i5862.m_SmoothTurnTime = i5863[7]
  request.r(i5863[8], i5863[9], 0, i5862, 'm_Target')
  i5862.m_AutoTargetPlayer = !!i5863[10]
  i5862.m_UpdateType = i5863[11]
  return i5862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i5864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i5865 = data
  i5864.enabled = !!i5865[0]
  i5864.aspect = i5865[1]
  i5864.orthographic = !!i5865[2]
  i5864.orthographicSize = i5865[3]
  i5864.backgroundColor = new pc.Color(i5865[4], i5865[5], i5865[6], i5865[7])
  i5864.nearClipPlane = i5865[8]
  i5864.farClipPlane = i5865[9]
  i5864.fieldOfView = i5865[10]
  i5864.depth = i5865[11]
  i5864.clearFlags = i5865[12]
  i5864.cullingMask = i5865[13]
  i5864.rect = i5865[14]
  request.r(i5865[15], i5865[16], 0, i5864, 'targetTexture')
  return i5864
}

Deserializers["CameraFollower"] = function (request, data, root) {
  var i5866 = root || request.c( 'CameraFollower' )
  var i5867 = data
  request.r(i5867[0], i5867[1], 0, i5866, 'Target')
  i5866.PositionOffset = new pc.Vec3( i5867[2], i5867[3], i5867[4] )
  i5866.RotationOffset = new pc.Vec3( i5867[5], i5867[6], i5867[7] )
  i5866.CameraSpeed = i5867[8]
  return i5866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i5868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i5869 = data
  i5868.enabled = !!i5869[0]
  i5868.type = i5869[1]
  i5868.color = new pc.Color(i5869[2], i5869[3], i5869[4], i5869[5])
  i5868.cullingMask = i5869[6]
  i5868.intensity = i5869[7]
  i5868.range = i5869[8]
  i5868.spotAngle = i5869[9]
  i5868.shadows = i5869[10]
  i5868.shadowNormalBias = i5869[11]
  i5868.shadowBias = i5869[12]
  i5868.shadowStrength = i5869[13]
  i5868.lightmapBakeType = i5869[14]
  i5868.renderMode = i5869[15]
  request.r(i5869[16], i5869[17], 0, i5868, 'cookie')
  i5868.cookieSize = i5869[18]
  return i5868
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i5870 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i5871 = data
  request.r(i5871[0], i5871[1], 0, i5870, 'm_FirstSelected')
  i5870.m_sendNavigationEvents = !!i5871[2]
  i5870.m_DragThreshold = i5871[3]
  return i5870
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i5872 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i5873 = data
  i5872.m_HorizontalAxis = i5873[0]
  i5872.m_VerticalAxis = i5873[1]
  i5872.m_SubmitButton = i5873[2]
  i5872.m_CancelButton = i5873[3]
  i5872.m_InputActionsPerSecond = i5873[4]
  i5872.m_RepeatDelay = i5873[5]
  i5872.m_ForceModuleActive = !!i5873[6]
  return i5872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i5874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i5875 = data
  i5874.enabled = !!i5875[0]
  i5874.planeDistance = i5875[1]
  i5874.referencePixelsPerUnit = i5875[2]
  i5874.isFallbackOverlay = !!i5875[3]
  i5874.renderMode = i5875[4]
  i5874.renderOrder = i5875[5]
  i5874.sortingLayerName = i5875[6]
  i5874.sortingOrder = i5875[7]
  i5874.scaleFactor = i5875[8]
  request.r(i5875[9], i5875[10], 0, i5874, 'worldCamera')
  i5874.overrideSorting = !!i5875[11]
  i5874.pixelPerfect = !!i5875[12]
  i5874.targetDisplay = i5875[13]
  i5874.overridePixelPerfect = !!i5875[14]
  return i5874
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i5876 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i5877 = data
  i5876.m_UiScaleMode = i5877[0]
  i5876.m_ReferencePixelsPerUnit = i5877[1]
  i5876.m_ScaleFactor = i5877[2]
  i5876.m_ReferenceResolution = new pc.Vec2( i5877[3], i5877[4] )
  i5876.m_ScreenMatchMode = i5877[5]
  i5876.m_MatchWidthOrHeight = i5877[6]
  i5876.m_PhysicalUnit = i5877[7]
  i5876.m_FallbackScreenDPI = i5877[8]
  i5876.m_DefaultSpriteDPI = i5877[9]
  i5876.m_DynamicPixelsPerUnit = i5877[10]
  return i5876
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i5878 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i5879 = data
  i5878.m_IgnoreReversedGraphics = !!i5879[0]
  i5878.m_BlockingObjects = i5879[1]
  i5878.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i5879[2] )
  return i5878
}

Deserializers["Countdown"] = function (request, data, root) {
  var i5880 = root || request.c( 'Countdown' )
  var i5881 = data
  request.r(i5881[0], i5881[1], 0, i5880, 'CountdownText')
  request.r(i5881[2], i5881[3], 0, i5880, 'Go_Image')
  request.r(i5881[4], i5881[5], 0, i5880, 'Outline')
  request.r(i5881[6], i5881[7], 0, i5880, 'MainWindow')
  return i5880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i5882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i5883 = data
  i5882.m_Alpha = i5883[0]
  i5882.m_Interactable = !!i5883[1]
  i5882.m_BlocksRaycasts = !!i5883[2]
  i5882.m_IgnoreParentGroups = !!i5883[3]
  i5882.enabled = !!i5883[4]
  return i5882
}

Deserializers["UnityEngine.UI.Outline"] = function (request, data, root) {
  var i5884 = root || request.c( 'UnityEngine.UI.Outline' )
  var i5885 = data
  i5884.m_EffectColor = new pc.Color(i5885[0], i5885[1], i5885[2], i5885[3])
  i5884.m_EffectDistance = new pc.Vec2( i5885[4], i5885[5] )
  i5884.m_UseGraphicAlpha = !!i5885[6]
  return i5884
}

Deserializers["CheatTxtPayload"] = function (request, data, root) {
  var i5886 = root || request.c( 'CheatTxtPayload' )
  var i5887 = data
  return i5886
}

Deserializers["WinScreenWidget"] = function (request, data, root) {
  var i5888 = root || request.c( 'WinScreenWidget' )
  var i5889 = data
  request.r(i5889[0], i5889[1], 0, i5888, 'RaceCar')
  request.r(i5889[2], i5889[3], 0, i5888, 'WheatText')
  request.r(i5889[4], i5889[5], 0, i5888, 'GemText')
  request.r(i5889[6], i5889[7], 0, i5888, 'GameManager')
  request.r(i5889[8], i5889[9], 0, i5888, 'products')
  return i5888
}

Deserializers["EndGameButton"] = function (request, data, root) {
  var i5890 = root || request.c( 'EndGameButton' )
  var i5891 = data
  request.r(i5891[0], i5891[1], 0, i5890, 'GameManager')
  return i5890
}

Deserializers["LongTapButton"] = function (request, data, root) {
  var i5892 = root || request.c( 'LongTapButton' )
  var i5893 = data
  i5892.OnMouseDownEvent = request.d('UnityEngine.Events.UnityEvent', i5893[0], i5892.OnMouseDownEvent)
  i5892.OnMouseUpEvent = request.d('UnityEngine.Events.UnityEvent', i5893[1], i5892.OnMouseUpEvent)
  return i5892
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i5894 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i5895 = data
  i5894.m_Spacing = i5895[0]
  i5894.m_ChildForceExpandWidth = !!i5895[1]
  i5894.m_ChildForceExpandHeight = !!i5895[2]
  i5894.m_ChildControlWidth = !!i5895[3]
  i5894.m_ChildControlHeight = !!i5895[4]
  i5894.m_ChildScaleWidth = !!i5895[5]
  i5894.m_ChildScaleHeight = !!i5895[6]
  i5894.m_Padding = UnityEngine.RectOffset.FromPaddings(i5895[7], i5895[8], i5895[9], i5895[10])
  i5894.m_ChildAlignment = i5895[11]
  return i5894
}

Deserializers["BoostsPanelCtrl"] = function (request, data, root) {
  var i5896 = root || request.c( 'BoostsPanelCtrl' )
  var i5897 = data
  request.r(i5897[0], i5897[1], 0, i5896, 'boosts')
  request.r(i5897[2], i5897[3], 0, i5896, 'wgtBoostPrefab')
  return i5896
}

Deserializers["CheatSpeedTuning"] = function (request, data, root) {
  var i5898 = root || request.c( 'CheatSpeedTuning' )
  var i5899 = data
  request.r(i5899[0], i5899[1], 0, i5898, 'txtSpeed')
  request.r(i5899[2], i5899[3], 0, i5898, 'slider')
  return i5898
}

Deserializers["FPSWriter"] = function (request, data, root) {
  var i5900 = root || request.c( 'FPSWriter' )
  var i5901 = data
  i5900.m_refreshTime = i5901[0]
  return i5900
}

Deserializers["UnityEngine.UI.Toggle"] = function (request, data, root) {
  var i5902 = root || request.c( 'UnityEngine.UI.Toggle' )
  var i5903 = data
  i5902.toggleTransition = i5903[0]
  request.r(i5903[1], i5903[2], 0, i5902, 'graphic')
  i5902.onValueChanged = request.d('UnityEngine.UI.Toggle+ToggleEvent', i5903[3], i5902.onValueChanged)
  request.r(i5903[4], i5903[5], 0, i5902, 'm_Group')
  i5902.m_IsOn = !!i5903[6]
  i5902.m_Navigation = request.d('UnityEngine.UI.Navigation', i5903[7], i5902.m_Navigation)
  i5902.m_Transition = i5903[8]
  i5902.m_Colors = request.d('UnityEngine.UI.ColorBlock', i5903[9], i5902.m_Colors)
  i5902.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i5903[10], i5902.m_SpriteState)
  i5902.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i5903[11], i5902.m_AnimationTriggers)
  i5902.m_Interactable = !!i5903[12]
  request.r(i5903[13], i5903[14], 0, i5902, 'm_TargetGraphic')
  return i5902
}

Deserializers["UnityEngine.UI.Toggle+ToggleEvent"] = function (request, data, root) {
  var i5904 = root || request.c( 'UnityEngine.UI.Toggle+ToggleEvent' )
  var i5905 = data
  i5904.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i5905[0], i5904.m_PersistentCalls)
  return i5904
}

Deserializers["CheatToggleDisableIfTooFar"] = function (request, data, root) {
  var i5906 = root || request.c( 'CheatToggleDisableIfTooFar' )
  var i5907 = data
  request.r(i5907[0], i5907[1], 0, i5906, 'toggle')
  return i5906
}

Deserializers["TimeSinceStartup"] = function (request, data, root) {
  var i5908 = root || request.c( 'TimeSinceStartup' )
  var i5909 = data
  request.r(i5909[0], i5909[1], 0, i5908, 'Text')
  return i5908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i5910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i5911 = data
  i5910.name = i5911[0]
  i5910.atlasId = i5911[1]
  i5910.mipmapCount = i5911[2]
  i5910.hdr = !!i5911[3]
  i5910.size = i5911[4]
  i5910.anisoLevel = i5911[5]
  i5910.filterMode = i5911[6]
  i5910.wrapMode = i5911[7]
  var i5913 = i5911[8]
  var i5912 = []
  for(var i = 0; i < i5913.length; i += 4) {
    i5912.push( UnityEngine.Rect.MinMaxRect(i5913[i + 0], i5913[i + 1], i5913[i + 2], i5913[i + 3]) );
  }
  i5910.rects = i5912
  return i5910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i5916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i5917 = data
  i5916.name = i5917[0]
  i5916.index = i5917[1]
  i5916.startup = !!i5917[2]
  return i5916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i5918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i5919 = data
  i5918.ambientIntensity = i5919[0]
  i5918.reflectionIntensity = i5919[1]
  i5918.ambientMode = i5919[2]
  i5918.ambientLight = new pc.Color(i5919[3], i5919[4], i5919[5], i5919[6])
  i5918.ambientSkyColor = new pc.Color(i5919[7], i5919[8], i5919[9], i5919[10])
  i5918.ambientGroundColor = new pc.Color(i5919[11], i5919[12], i5919[13], i5919[14])
  i5918.ambientEquatorColor = new pc.Color(i5919[15], i5919[16], i5919[17], i5919[18])
  i5918.fogColor = new pc.Color(i5919[19], i5919[20], i5919[21], i5919[22])
  i5918.fogEndDistance = i5919[23]
  i5918.fogStartDistance = i5919[24]
  i5918.fogDensity = i5919[25]
  i5918.fog = !!i5919[26]
  request.r(i5919[27], i5919[28], 0, i5918, 'skybox')
  i5918.fogMode = i5919[29]
  var i5921 = i5919[30]
  var i5920 = []
  for(var i = 0; i < i5921.length; i += 1) {
    i5920.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i5921[i + 0]) );
  }
  i5918.lightmaps = i5920
  i5918.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i5919[31], i5918.lightProbes)
  i5918.lightmapsMode = i5919[32]
  i5918.environmentLightingMode = i5919[33]
  i5918.ambientProbe = new pc.SphericalHarmonicsL2(i5919[34])
  request.r(i5919[35], i5919[36], 0, i5918, 'customReflection')
  request.r(i5919[37], i5919[38], 0, i5918, 'defaultReflection')
  i5918.defaultReflectionMode = i5919[39]
  i5918.defaultReflectionResolution = i5919[40]
  i5918.sunLightObjectId = i5919[41]
  i5918.pixelLightCount = i5919[42]
  i5918.defaultReflectionHDR = !!i5919[43]
  i5918.hasLightDataAsset = !!i5919[44]
  i5918.hasManualGenerate = !!i5919[45]
  return i5918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i5924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i5925 = data
  request.r(i5925[0], i5925[1], 0, i5924, 'lightmapColor')
  request.r(i5925[2], i5925[3], 0, i5924, 'lightmapDirection')
  return i5924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i5926 = root || new UnityEngine.LightProbes()
  var i5927 = data
  return i5926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i5934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i5935 = data
  i5934.name = i5935[0]
  var i5937 = i5935[1]
  var i5936 = []
  for(var i = 0; i < i5937.length; i += 1) {
    i5936.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i5937[i + 0]) );
  }
  i5934.passes = i5936
  var i5939 = i5935[2]
  var i5938 = []
  for(var i = 0; i < i5939.length; i += 1) {
    i5938.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i5939[i + 0]) );
  }
  i5934.defaultParameterValues = i5938
  return i5934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i5942 = root || new pc.UnityShaderPass()
  var i5943 = data
  i5942.passType = i5943[0]
  i5942.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5943[1], i5942.zTest)
  i5942.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5943[2], i5942.zWrite)
  i5942.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5943[3], i5942.culling)
  i5942.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i5943[4], i5942.blending)
  i5942.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i5943[5], i5942.alphaBlending)
  i5942.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5943[6], i5942.colorWriteMask)
  i5942.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5943[7], i5942.offsetUnits)
  i5942.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5943[8], i5942.offsetFactor)
  i5942.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5943[9], i5942.stencilRef)
  i5942.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5943[10], i5942.stencilReadMask)
  i5942.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5943[11], i5942.stencilWriteMask)
  i5942.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5943[12], i5942.stencilOp)
  i5942.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5943[13], i5942.stencilOpFront)
  i5942.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5943[14], i5942.stencilOpBack)
  var i5945 = i5943[15]
  var i5944 = []
  for(var i = 0; i < i5945.length; i += 1) {
    i5944.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i5945[i + 0]) );
  }
  i5942.tags = i5944
  var i5947 = i5943[16]
  var i5946 = []
  for(var i = 0; i < i5947.length; i += 1) {
    i5946.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i5947[i + 0]) );
  }
  i5942.variants = i5946
  return i5942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i5948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i5949 = data
  i5948.val = i5949[0]
  i5948.name = i5949[1]
  return i5948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i5950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i5951 = data
  i5950.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5951[0], i5950.src)
  i5950.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5951[1], i5950.dst)
  i5950.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5951[2], i5950.op)
  return i5950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i5952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i5953 = data
  i5952.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5953[0], i5952.pass)
  i5952.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5953[1], i5952.fail)
  i5952.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5953[2], i5952.zFail)
  i5952.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5953[3], i5952.comp)
  return i5952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i5956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i5957 = data
  i5956.name = i5957[0]
  i5956.value = i5957[1]
  return i5956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i5960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i5961 = data
  var i5963 = i5961[0]
  var i5962 = []
  for(var i = 0; i < i5963.length; i += 1) {
    i5962.push( i5963[i + 0] );
  }
  i5960.keywords = i5962
  i5960.vertexProgram = i5961[1]
  i5960.fragmentProgram = i5961[2]
  return i5960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i5968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i5969 = data
  i5968.name = i5969[0]
  i5968.type = i5969[1]
  i5968.value = new pc.Vec4( i5969[2], i5969[3], i5969[4], i5969[5] )
  i5968.textureValue = i5969[6]
  return i5968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i5970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i5971 = data
  i5970.name = i5971[0]
  request.r(i5971[1], i5971[2], 0, i5970, 'texture')
  i5970.aabb = i5971[3]
  i5970.vertices = i5971[4]
  i5970.triangles = i5971[5]
  i5970.textureRect = UnityEngine.Rect.MinMaxRect(i5971[6], i5971[7], i5971[8], i5971[9])
  i5970.packedRect = UnityEngine.Rect.MinMaxRect(i5971[10], i5971[11], i5971[12], i5971[13])
  i5970.border = new pc.Vec4( i5971[14], i5971[15], i5971[16], i5971[17] )
  i5970.transparency = i5971[18]
  i5970.bounds = i5971[19]
  i5970.pixelsPerUnit = i5971[20]
  i5970.textureWidth = i5971[21]
  i5970.textureHeight = i5971[22]
  i5970.nativeSize = new pc.Vec2( i5971[23], i5971[24] )
  i5970.pivot = new pc.Vec2( i5971[25], i5971[26] )
  i5970.textureRectOffset = new pc.Vec2( i5971[27], i5971[28] )
  return i5970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i5972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i5973 = data
  i5972.name = i5973[0]
  i5972.wrapMode = i5973[1]
  i5972.isLooping = !!i5973[2]
  i5972.length = i5973[3]
  var i5975 = i5973[4]
  var i5974 = []
  for(var i = 0; i < i5975.length; i += 1) {
    i5974.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i5975[i + 0]) );
  }
  i5972.curves = i5974
  var i5977 = i5973[5]
  var i5976 = []
  for(var i = 0; i < i5977.length; i += 1) {
    i5976.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i5977[i + 0]) );
  }
  i5972.events = i5976
  i5972.halfPrecision = !!i5973[6]
  return i5972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i5980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i5981 = data
  i5980.path = i5981[0]
  i5980.componentType = i5981[1]
  i5980.property = i5981[2]
  i5980.keys = i5981[3]
  var i5983 = i5981[4]
  var i5982 = []
  for(var i = 0; i < i5983.length; i += 1) {
    i5982.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i5983[i + 0]) );
  }
  i5980.objectReferenceKeys = i5982
  return i5980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i5986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i5987 = data
  i5986.time = i5987[0]
  request.r(i5987[1], i5987[2], 0, i5986, 'value')
  return i5986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i5990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i5991 = data
  i5990.functionName = i5991[0]
  i5990.floatParameter = i5991[1]
  i5990.intParameter = i5991[2]
  i5990.stringParameter = i5991[3]
  request.r(i5991[4], i5991[5], 0, i5990, 'objectReferenceParameter')
  i5990.time = i5991[6]
  return i5990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i5992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i5993 = data
  i5992.name = i5993[0]
  i5992.ascent = i5993[1]
  i5992.originalLineHeight = i5993[2]
  i5992.fontSize = i5993[3]
  var i5995 = i5993[4]
  var i5994 = []
  for(var i = 0; i < i5995.length; i += 1) {
    i5994.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i5995[i + 0]) );
  }
  i5992.characterInfo = i5994
  request.r(i5993[5], i5993[6], 0, i5992, 'texture')
  i5992.originalFontSize = i5993[7]
  return i5992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i5998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i5999 = data
  i5998.index = i5999[0]
  i5998.advance = i5999[1]
  i5998.bearing = i5999[2]
  i5998.glyphWidth = i5999[3]
  i5998.glyphHeight = i5999[4]
  i5998.minX = i5999[5]
  i5998.maxX = i5999[6]
  i5998.minY = i5999[7]
  i5998.maxY = i5999[8]
  i5998.uvBottomLeftX = i5999[9]
  i5998.uvBottomLeftY = i5999[10]
  i5998.uvBottomRightX = i5999[11]
  i5998.uvBottomRightY = i5999[12]
  i5998.uvTopLeftX = i5999[13]
  i5998.uvTopLeftY = i5999[14]
  i5998.uvTopRightX = i5999[15]
  i5998.uvTopRightY = i5999[16]
  return i5998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i6000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i6001 = data
  i6000.name = i6001[0]
  var i6003 = i6001[1]
  var i6002 = []
  for(var i = 0; i < i6003.length; i += 1) {
    i6002.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i6003[i + 0]) );
  }
  i6000.states = i6002
  var i6005 = i6001[2]
  var i6004 = []
  for(var i = 0; i < i6005.length; i += 1) {
    i6004.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i6005[i + 0]) );
  }
  i6000.layers = i6004
  var i6007 = i6001[3]
  var i6006 = []
  for(var i = 0; i < i6007.length; i += 1) {
    i6006.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i6007[i + 0]) );
  }
  i6000.parameters = i6006
  return i6000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i6010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i6011 = data
  i6010.cycleOffset = i6011[0]
  i6010.cycleOffsetParameter = i6011[1]
  i6010.cycleOffsetParameterActive = !!i6011[2]
  i6010.mirror = !!i6011[3]
  i6010.mirrorParameter = i6011[4]
  i6010.mirrorParameterActive = !!i6011[5]
  i6010.motionId = i6011[6]
  i6010.nameHash = i6011[7]
  i6010.fullPathHash = i6011[8]
  i6010.speed = i6011[9]
  i6010.speedParameter = i6011[10]
  i6010.speedParameterActive = !!i6011[11]
  i6010.tag = i6011[12]
  i6010.name = i6011[13]
  i6010.writeDefaultValues = !!i6011[14]
  var i6013 = i6011[15]
  var i6012 = []
  for(var i = 0; i < i6013.length; i += 1) {
    i6012.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i6013[i + 0]) );
  }
  i6010.transitions = i6012
  var i6015 = i6011[16]
  var i6014 = []
  for(var i = 0; i < i6015.length; i += 2) {
  request.r(i6015[i + 0], i6015[i + 1], 2, i6014, '')
  }
  i6010.behaviours = i6014
  return i6010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i6018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i6019 = data
  i6018.fullPath = i6019[0]
  i6018.canTransitionToSelf = !!i6019[1]
  i6018.duration = i6019[2]
  i6018.exitTime = i6019[3]
  i6018.hasExitTime = !!i6019[4]
  i6018.hasFixedDuration = !!i6019[5]
  i6018.interruptionSource = i6019[6]
  i6018.offset = i6019[7]
  i6018.orderedInterruption = !!i6019[8]
  i6018.destinationStateNameHash = i6019[9]
  i6018.destinationStateMachineId = i6019[10]
  i6018.isExit = !!i6019[11]
  i6018.mute = !!i6019[12]
  i6018.solo = !!i6019[13]
  var i6021 = i6019[14]
  var i6020 = []
  for(var i = 0; i < i6021.length; i += 1) {
    i6020.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i6021[i + 0]) );
  }
  i6018.conditions = i6020
  return i6018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i6026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i6027 = data
  i6026.blendingMode = i6027[0]
  i6026.defaultWeight = i6027[1]
  i6026.name = i6027[2]
  i6026.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i6027[3], i6026.stateMachine)
  return i6026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i6028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i6029 = data
  i6028.id = i6029[0]
  i6028.defaultStateNameHash = i6029[1]
  var i6031 = i6029[2]
  var i6030 = []
  for(var i = 0; i < i6031.length; i += 1) {
    i6030.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i6031[i + 0]) );
  }
  i6028.entryTransitions = i6030
  var i6033 = i6029[3]
  var i6032 = []
  for(var i = 0; i < i6033.length; i += 1) {
    i6032.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i6033[i + 0]) );
  }
  i6028.anyStateTransitions = i6032
  return i6028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i6036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i6037 = data
  i6036.destinationStateNameHash = i6037[0]
  i6036.destinationStateMachineId = i6037[1]
  i6036.isExit = !!i6037[2]
  i6036.mute = !!i6037[3]
  i6036.solo = !!i6037[4]
  var i6039 = i6037[5]
  var i6038 = []
  for(var i = 0; i < i6039.length; i += 1) {
    i6038.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i6039[i + 0]) );
  }
  i6036.conditions = i6038
  return i6036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i6042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i6043 = data
  i6042.defaultBool = !!i6043[0]
  i6042.defaultFloat = i6043[1]
  i6042.defaultInt = i6043[2]
  i6042.name = i6043[3]
  i6042.nameHash = i6043[4]
  i6042.type = i6043[5]
  return i6042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i6044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i6045 = data
  i6044.name = i6045[0]
  i6044.bytes64 = i6045[1]
  i6044.data = i6045[2]
  return i6044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i6046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i6047 = data
  var i6049 = i6047[0]
  var i6048 = []
  for(var i = 0; i < i6049.length; i += 1) {
    i6048.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i6049[i + 0]) );
  }
  i6046.files = i6048
  i6046.componentToPrefabIds = i6047[1]
  return i6046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i6052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i6053 = data
  i6052.path = i6053[0]
  request.r(i6053[1], i6053[2], 0, i6052, 'unityObject')
  return i6052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i6054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i6055 = data
  var i6057 = i6055[0]
  var i6056 = []
  for(var i = 0; i < i6057.length; i += 1) {
    i6056.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i6057[i + 0]) );
  }
  i6054.scriptsExecutionOrder = i6056
  var i6059 = i6055[1]
  var i6058 = []
  for(var i = 0; i < i6059.length; i += 1) {
    i6058.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i6059[i + 0]) );
  }
  i6054.sortingLayers = i6058
  var i6061 = i6055[2]
  var i6060 = []
  for(var i = 0; i < i6061.length; i += 1) {
    i6060.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i6061[i + 0]) );
  }
  i6054.cullingLayers = i6060
  i6054.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i6055[3], i6054.timeSettings)
  i6054.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i6055[4], i6054.physicsSettings)
  i6054.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i6055[5], i6054.physics2DSettings)
  i6054.removeShadows = !!i6055[6]
  i6054.autoInstantiatePrefabs = !!i6055[7]
  i6054.enableAutoInstancing = !!i6055[8]
  i6054.lightmapEncodingQuality = i6055[9]
  i6054.desiredColorSpace = i6055[10]
  return i6054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i6064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i6065 = data
  i6064.name = i6065[0]
  i6064.value = i6065[1]
  return i6064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i6068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i6069 = data
  i6068.id = i6069[0]
  i6068.name = i6069[1]
  i6068.value = i6069[2]
  return i6068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i6072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i6073 = data
  i6072.id = i6073[0]
  i6072.name = i6073[1]
  return i6072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i6074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i6075 = data
  i6074.fixedDeltaTime = i6075[0]
  i6074.maximumDeltaTime = i6075[1]
  i6074.timeScale = i6075[2]
  i6074.maximumParticleTimestep = i6075[3]
  return i6074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i6076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i6077 = data
  i6076.gravity = new pc.Vec3( i6077[0], i6077[1], i6077[2] )
  i6076.defaultSolverIterations = i6077[3]
  i6076.bounceThreshold = i6077[4]
  i6076.autoSyncTransforms = !!i6077[5]
  i6076.autoSimulation = !!i6077[6]
  var i6079 = i6077[7]
  var i6078 = []
  for(var i = 0; i < i6079.length; i += 1) {
    i6078.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i6079[i + 0]) );
  }
  i6076.collisionMatrix = i6078
  return i6076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i6082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i6083 = data
  i6082.enabled = !!i6083[0]
  i6082.layerId = i6083[1]
  i6082.otherLayerId = i6083[2]
  return i6082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i6084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i6085 = data
  request.r(i6085[0], i6085[1], 0, i6084, 'material')
  i6084.gravity = new pc.Vec2( i6085[2], i6085[3] )
  i6084.positionIterations = i6085[4]
  i6084.velocityIterations = i6085[5]
  i6084.velocityThreshold = i6085[6]
  i6084.maxLinearCorrection = i6085[7]
  i6084.maxAngularCorrection = i6085[8]
  i6084.maxTranslationSpeed = i6085[9]
  i6084.maxRotationSpeed = i6085[10]
  i6084.timeToSleep = i6085[11]
  i6084.linearSleepTolerance = i6085[12]
  i6084.angularSleepTolerance = i6085[13]
  i6084.defaultContactOffset = i6085[14]
  i6084.autoSimulation = !!i6085[15]
  i6084.queriesHitTriggers = !!i6085[16]
  i6084.queriesStartInColliders = !!i6085[17]
  i6084.callbacksOnDisable = !!i6085[18]
  i6084.reuseCollisionCallbacks = !!i6085[19]
  i6084.autoSyncTransforms = !!i6085[20]
  var i6087 = i6085[21]
  var i6086 = []
  for(var i = 0; i < i6087.length; i += 1) {
    i6086.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i6087[i + 0]) );
  }
  i6084.collisionMatrix = i6086
  return i6084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i6090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i6091 = data
  i6090.enabled = !!i6091[0]
  i6090.layerId = i6091[1]
  i6090.otherLayerId = i6091[2]
  return i6090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i6094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i6095 = data
  i6094.weight = i6095[0]
  i6094.vertices = i6095[1]
  i6094.normals = i6095[2]
  i6094.tangents = i6095[3]
  return i6094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i6098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i6099 = data
  i6098.mode = i6099[0]
  i6098.parameter = i6099[1]
  i6098.threshold = i6099[2]
  return i6098
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"enabled":0,"isTrigger":1,"material":2,"center":4,"radius":7},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tag":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"speedModifier":4,"space":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limitX":1,"limitY":2,"limitZ":3,"dampen":4,"separateAxes":5,"space":6,"drag":7,"multiplyDragByParticleSize":8,"multiplyDragByParticleVelocity":9},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"playOnAwake":2,"loop":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"updateMode":2,"humanBones":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"environmentLightingMode":33,"ambientProbe":34,"customReflection":35,"defaultReflection":37,"defaultReflectionMode":39,"defaultReflectionResolution":40,"sunLightObjectId":41,"pixelLightCount":42,"defaultReflectionHDR":43,"hasLightDataAsset":44,"hasManualGenerate":45},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"name":0,"passes":1,"defaultParameterValues":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"passType":0,"zTest":1,"zWrite":2,"culling":3,"blending":4,"alphaBlending":5,"colorWriteMask":6,"offsetUnits":7,"offsetFactor":8,"stencilRef":9,"stencilReadMask":10,"stencilWriteMask":11,"stencilOp":12,"stencilOpFront":13,"stencilOpBack":14,"tags":15,"variants":16},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"keywords":0,"vertexProgram":1,"fragmentProgram":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"writeDefaultValues":14,"transitions":15,"behaviours":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"removeShadows":6,"autoInstantiatePrefabs":7,"enableAutoInstancing":8,"lightmapEncodingQuality":9,"desiredColorSpace":10},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"timeToSleep":11,"linearSleepTolerance":12,"angularSleepTolerance":13,"defaultContactOffset":14,"autoSimulation":15,"queriesHitTriggers":16,"queriesStartInColliders":17,"callbacksOnDisable":18,"reuseCollisionCallbacks":19,"autoSyncTransforms":20,"collisionMatrix":21},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"93":[94],"95":[94],"96":[94],"97":[94],"98":[94],"99":[94],"100":[51],"101":[57],"102":[34],"103":[34],"104":[34],"105":[34],"106":[34],"107":[34],"108":[34],"109":[110],"111":[110],"112":[110],"113":[110],"114":[110],"115":[110],"116":[110],"117":[110],"118":[110],"119":[110],"120":[110],"121":[110],"122":[110],"123":[57],"124":[10],"125":[126],"127":[126],"78":[18],"13":[15],"128":[18],"84":[33],"37":[35],"36":[45],"38":[35],"129":[130],"131":[18],"132":[24,18],"80":[78],"23":[24,18],"133":[18],"79":[78],"134":[18],"135":[18],"85":[18],"136":[18],"27":[18],"137":[18],"138":[18],"139":[18],"140":[24,18],"141":[24,18],"142":[18],"143":[18],"144":[18],"20":[18],"22":[24,18],"89":[18],"145":[76],"146":[76],"77":[76],"147":[76],"148":[57],"149":[57],"150":[18],"151":[24,18],"152":[10],"153":[24,18],"154":[24,18],"155":[10,24,18],"156":[18,24],"157":[18]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.SphereCollider","UnityEngine.MonoBehaviour","UnselectedColliderDrawer","WheatPieceDestroyer","WheatPieceRandomizer","DisableIfTooFar","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.Texture2D","DamagingObstacle","UnityEngine.ParticleSystemRenderer","UnityEngine.ParticleSystem","LootableItem","LightPole","UnityEngine.RectTransform","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Slider","WheatSliderWidget","UnityEngine.UI.Text","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.Font","UnityEngine.Sprite","UnityEngine.UI.LayoutElement","HealthBar","ShieldBar","UnityEngine.GameObject","UIActiveBoost","ShootButtonCtrl","UnityEngine.UI.Button","UnityEngine.Rigidbody","CarController","WheelEffects","CarUserControl","UnityStandardAssets.Vehicles.Car.CarAudio","UnityEngine.BoxCollider","RaceCar","HealthController","Gun","JustWheelMeshes","BlobShadowMovement","UnityEngine.AudioSource","Rocket","Explosion","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","DriverDescription","UnityEngine.SkinnedMeshRenderer","TrackHandles","PathCreation.PathCreator","UnityEngine.MeshCollider","FinishTrigger","GameManager","UnityEngine.Camera","Countdown","UnityEngine.CanvasGroup","LongTapButton","TrackContentGenerator","WheatGenerator","RoadGenerator","GhostReader","LunaUIFields","Localization","UnityEngine.TextAsset","Products","Boosts","GhostWriter","UnityStandardAssets.Cameras.AutoCam","UnityEngine.AudioListener","CameraFollower","UnityEngine.LightProbeGroup","UnityEngine.Light","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Outline","CheatTxtPayload","WinScreenWidget","EndGameButton","UnityEngine.UI.HorizontalLayoutGroup","BoostsPanelCtrl","CheatSpeedTuning","FPSWriter","UnityEngine.UI.Toggle","CheatToggleDisableIfTooFar","TimeSinceStartup","UnityEngine.Cubemap","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","ButtonInput","SWS.PathRenderer","UnityEngine.LineRenderer","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TextContainer"]

Deserializers.unityVersion = "2019.4.16f1";

Deserializers.applicationIdentifier = "com.DefaultCompany.TribezRacingPlayable";

Deserializers.disableAntiAliasing = true;

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

