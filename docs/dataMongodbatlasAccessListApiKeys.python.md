# `dataMongodbatlasAccessListApiKeys` Submodule <a name="`dataMongodbatlasAccessListApiKeys` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasAccessListApiKeys <a name="DataMongodbatlasAccessListApiKeys" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/data-sources/access_list_api_keys mongodbatlas_access_list_api_keys}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_access_list_api_keys

dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  api_key_id: str,
  org_id: str,
  id: str = None,
  items_per_page: typing.Union[int, float] = None,
  page_num: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.Initializer.parameter.apiKeyId">api_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/data-sources/access_list_api_keys#api_key_id DataMongodbatlasAccessListApiKeys#api_key_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.Initializer.parameter.orgId">org_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/data-sources/access_list_api_keys#org_id DataMongodbatlasAccessListApiKeys#org_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/data-sources/access_list_api_keys#id DataMongodbatlasAccessListApiKeys#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.Initializer.parameter.itemsPerPage">items_per_page</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/data-sources/access_list_api_keys#items_per_page DataMongodbatlasAccessListApiKeys#items_per_page}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.Initializer.parameter.pageNum">page_num</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/data-sources/access_list_api_keys#page_num DataMongodbatlasAccessListApiKeys#page_num}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api_key_id`<sup>Required</sup> <a name="api_key_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.Initializer.parameter.apiKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/data-sources/access_list_api_keys#api_key_id DataMongodbatlasAccessListApiKeys#api_key_id}.

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.Initializer.parameter.orgId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/data-sources/access_list_api_keys#org_id DataMongodbatlasAccessListApiKeys#org_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/data-sources/access_list_api_keys#id DataMongodbatlasAccessListApiKeys#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `items_per_page`<sup>Optional</sup> <a name="items_per_page" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.Initializer.parameter.itemsPerPage"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/data-sources/access_list_api_keys#items_per_page DataMongodbatlasAccessListApiKeys#items_per_page}.

---

##### `page_num`<sup>Optional</sup> <a name="page_num" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.Initializer.parameter.pageNum"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/data-sources/access_list_api_keys#page_num DataMongodbatlasAccessListApiKeys#page_num}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.resetItemsPerPage">reset_items_per_page</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.resetPageNum">reset_page_num</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_items_per_page` <a name="reset_items_per_page" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.resetItemsPerPage"></a>

```python
def reset_items_per_page() -> None
```

##### `reset_page_num` <a name="reset_page_num" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.resetPageNum"></a>

```python
def reset_page_num() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataMongodbatlasAccessListApiKeys resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.isConstruct"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_access_list_api_keys

dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_access_list_api_keys

dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_access_list_api_keys

dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_access_list_api_keys

dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataMongodbatlasAccessListApiKeys resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataMongodbatlasAccessListApiKeys to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataMongodbatlasAccessListApiKeys that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/data-sources/access_list_api_keys#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasAccessListApiKeys to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.results">results</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsList">DataMongodbatlasAccessListApiKeysResultsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.apiKeyIdInput">api_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.itemsPerPageInput">items_per_page_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.orgIdInput">org_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.pageNumInput">page_num_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.apiKeyId">api_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.itemsPerPage">items_per_page</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.orgId">org_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.pageNum">page_num</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `results`<sup>Required</sup> <a name="results" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.results"></a>

```python
results: DataMongodbatlasAccessListApiKeysResultsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsList">DataMongodbatlasAccessListApiKeysResultsList</a>

---

##### `api_key_id_input`<sup>Optional</sup> <a name="api_key_id_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.apiKeyIdInput"></a>

```python
api_key_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `items_per_page_input`<sup>Optional</sup> <a name="items_per_page_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.itemsPerPageInput"></a>

```python
items_per_page_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `org_id_input`<sup>Optional</sup> <a name="org_id_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.orgIdInput"></a>

```python
org_id_input: str
```

- *Type:* str

---

##### `page_num_input`<sup>Optional</sup> <a name="page_num_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.pageNumInput"></a>

```python
page_num_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `api_key_id`<sup>Required</sup> <a name="api_key_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.apiKeyId"></a>

```python
api_key_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `items_per_page`<sup>Required</sup> <a name="items_per_page" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.itemsPerPage"></a>

```python
items_per_page: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.orgId"></a>

```python
org_id: str
```

- *Type:* str

---

##### `page_num`<sup>Required</sup> <a name="page_num" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.pageNum"></a>

```python
page_num: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasAccessListApiKeysConfig <a name="DataMongodbatlasAccessListApiKeysConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_access_list_api_keys

dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  api_key_id: str,
  org_id: str,
  id: str = None,
  items_per_page: typing.Union[int, float] = None,
  page_num: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysConfig.property.apiKeyId">api_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/data-sources/access_list_api_keys#api_key_id DataMongodbatlasAccessListApiKeys#api_key_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysConfig.property.orgId">org_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/data-sources/access_list_api_keys#org_id DataMongodbatlasAccessListApiKeys#org_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/data-sources/access_list_api_keys#id DataMongodbatlasAccessListApiKeys#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysConfig.property.itemsPerPage">items_per_page</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/data-sources/access_list_api_keys#items_per_page DataMongodbatlasAccessListApiKeys#items_per_page}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysConfig.property.pageNum">page_num</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/data-sources/access_list_api_keys#page_num DataMongodbatlasAccessListApiKeys#page_num}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api_key_id`<sup>Required</sup> <a name="api_key_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysConfig.property.apiKeyId"></a>

```python
api_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/data-sources/access_list_api_keys#api_key_id DataMongodbatlasAccessListApiKeys#api_key_id}.

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysConfig.property.orgId"></a>

```python
org_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/data-sources/access_list_api_keys#org_id DataMongodbatlasAccessListApiKeys#org_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/data-sources/access_list_api_keys#id DataMongodbatlasAccessListApiKeys#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `items_per_page`<sup>Optional</sup> <a name="items_per_page" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysConfig.property.itemsPerPage"></a>

```python
items_per_page: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/data-sources/access_list_api_keys#items_per_page DataMongodbatlasAccessListApiKeys#items_per_page}.

---

##### `page_num`<sup>Optional</sup> <a name="page_num" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysConfig.property.pageNum"></a>

```python
page_num: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/data-sources/access_list_api_keys#page_num DataMongodbatlasAccessListApiKeys#page_num}.

---

### DataMongodbatlasAccessListApiKeysResults <a name="DataMongodbatlasAccessListApiKeysResults" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResults.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_access_list_api_keys

dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResults()
```


## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasAccessListApiKeysResultsList <a name="DataMongodbatlasAccessListApiKeysResultsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_access_list_api_keys

dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataMongodbatlasAccessListApiKeysResultsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataMongodbatlasAccessListApiKeysResultsOutputReference <a name="DataMongodbatlasAccessListApiKeysResultsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_access_list_api_keys

dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.property.accessCount">access_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.property.cidrBlock">cidr_block</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.property.lastUsed">last_used</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.property.lastUsedAddress">last_used_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResults">DataMongodbatlasAccessListApiKeysResults</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_count`<sup>Required</sup> <a name="access_count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.property.accessCount"></a>

```python
access_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cidr_block`<sup>Required</sup> <a name="cidr_block" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.property.cidrBlock"></a>

```python
cidr_block: str
```

- *Type:* str

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `last_used`<sup>Required</sup> <a name="last_used" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.property.lastUsed"></a>

```python
last_used: str
```

- *Type:* str

---

##### `last_used_address`<sup>Required</sup> <a name="last_used_address" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.property.lastUsedAddress"></a>

```python
last_used_address: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.property.internalValue"></a>

```python
internal_value: DataMongodbatlasAccessListApiKeysResults
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResults">DataMongodbatlasAccessListApiKeysResults</a>

---



